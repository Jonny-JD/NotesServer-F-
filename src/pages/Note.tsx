import React, {useEffect, useState} from "react";
import styles from "../styles/page/note_page.module.less";

import SwampStyle from "../components/SwampStyle.tsx";
import ErrorMessage from "../components/message/ErrorMessage.tsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import editNoteButton from "../assets/img/swamp/svg/edit_note_button.svg";
import deleteNoteButton from "../assets/img/swamp/svg/delete_note_button.svg";
import privateButton from "../assets/img/swamp/svg/private_button.svg";
import cn from "classnames";

const currentPage = 5;
const totalPages = 8;

interface NoteAuthorDto {
    id: string;
    username: string;
}

interface NoteReadDto {
    id: string;
    title: string;
    tag: string;
    content: string;
    author: NoteAuthorDto;
    isPrivate: boolean;
}

const NotePage: React.FC = () => {
    const location = useLocation();
    const fromUserNotesList = location.state?.fromUserNotesList ?? false;

    const {id} = useParams();
    const [note, setNote] = useState<NoteReadDto | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE}/notes/${id}`);
                if (!response.ok) {
                    const data = await response.json();
                    const errorMessage =
                        data?.errors?.validation ??
                        data?.message ??
                        data?.error ??
                        "Note not found.";
                    setError(errorMessage);
                    return;
                }
                const data: NoteReadDto = await response.json();
                setNote(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message || "Unknown error");
                }
            }
        };

        if (id) {
            fetchNote().catch(console.error);
        }
    }, [id]);

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setTag(note.tag);
            setContent(note.content);
            setIsPrivate(note.isPrivate);
        }
    }, [note]);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE}/notes/${note?.id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    navigate("/notes/my");
                } else {
                    alert("Failed to delete note.");
                }
            } catch {
                alert("Error while deleting note.");
            }
        }
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE}/notes/${note?.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    tag,
                    content,
                    isPrivate,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Failed to update note");
                return;
            }

            const updatedNote = await response.json();
            setNote(updatedNote);
            setIsEditing(false);
        } catch {
            setError("Error while updating note.");
        }
    };

    if (!note) {
        return error && <ErrorMessage message={error} />;
    }

    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                {error && <ErrorMessage message={error} />}
                <div className={styles.noteForm}>
                    <div className={styles.noteTextWrapper}>
                        <div className={styles.noteHeader}>
                            <div className={styles.formField}>
                                <span className={styles.tagHeader}>Title:</span>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                ) : (
                                    <span className={styles.formText}>{note.title}</span>
                                )}
                            </div>
                            <div className={styles.formField}>
                                <span className={styles.tagHeader}>Tag:</span>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                ) : (
                                    <span className={styles.formText}>{note.tag}</span>
                                )}
                            </div>
                            {!isEditing && (
                                <div className={styles.formField}>
                                    <span className={styles.tagHeader}>Author:</span>
                                    <span className={styles.formText}>{note.author.username}</span>
                                </div>
                            )}
                        </div>
                        <div className={styles.noteArea}>
                            {isEditing ? (
                                <textarea
                                    className={styles.hideScrollbar}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            ) : (
                                note.content
                            )}
                        </div>
                    </div>
                    {fromUserNotesList && (
                        <div className={styles.formButtonsWrapper}>
                            {isEditing ? (
                                <>
                                    <div className={styles.buttonWrapper}>
                                        <img
                                            className={cn(styles.isPrivateButton, {
                                                [styles.isPrivateButtonActive]: isPrivate,
                                            })}
                                            src={privateButton}
                                            alt="Toggle Private"
                                            style={{cursor: "pointer"}}
                                            onClick={() => setIsPrivate(!isPrivate)}
                                        />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <button
                                            type="button"
                                            onClick={handleSave}
                                            style={{cursor: "pointer"}}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.buttonWrapper}>
                                        <img
                                            className={cn(styles.editButton)}
                                            src={editNoteButton}
                                            alt="Edit Note"
                                            style={{cursor: "pointer"}}
                                            onClick={() => setIsEditing(true)}
                                        />
                                    </div>
                                    <div className={cn(styles.buttonWrapper, styles.deleteButtonWrapper)}>
                                        <img
                                            className={cn(styles.deleteButton)}
                                            src={deleteNoteButton}
                                            alt="Delete Note"
                                            style={{cursor: "pointer"}}
                                            onClick={handleDelete}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </SwampStyle>
    );
};

export default NotePage;
