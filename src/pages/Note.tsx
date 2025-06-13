import React, {useEffect, useState} from "react";
import styles from "../styles/page/note_page.module.less";

import SwampStyle from "../components/SwampStyle.tsx";
import ErrorMessage from "../components/message/ErrorMessage.tsx";
import {useLocation, useParams} from "react-router-dom";
import editNoteButton from "../assets/img/swamp/svg/edit_note_button.svg";
import cn from "classnames";
import deleteNoteButton from "../assets/img/swamp/svg/delete_note_button.svg";

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
}


const NotePage: React.FC = () => {
    const location = useLocation();
    const fromUserNotesList = location.state?.fromUserNotesList ?? false;

    const {id} = useParams();
    const [note, setNote] = useState<NoteReadDto | null>(null);
    const [error, setError] = useState<string | null>(null);

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


    if (!note) {
        return error && <ErrorMessage message={error}/>
    }


    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                {error && <ErrorMessage message={error}/>}
                <div className={styles.noteForm}>
                    <div className={styles.noteTextWrapper}>
                        <div className={styles.noteHeader}>
                            <div className={styles.formField}>
                                <span className={styles.tagHeader}>Title:</span>
                                <span className={styles.formText}>{note.title}</span>
                            </div>
                            <div className={styles.formField}>
                                <span className={styles.tagHeader}>Tag:</span>
                                <span className={styles.formText}>{note.tag}</span>
                            </div>
                            <div className={styles.formField}>
                                <span className={styles.tagHeader}>Author:</span>
                                <span className={styles.formText}>{note.author.username}</span>
                            </div>
                        </div>
                        <div className={styles.noteArea}>
                            {note.content}
                        </div>
                    </div>
                    {fromUserNotesList && (
                        <div className={styles.formButtonsWrapper}>
                            <div className={styles.buttonWrapper}>
                                <img
                                    className={cn(styles.editButton)}
                                    src={editNoteButton}
                                    alt="Edit Note"
                                    style={{cursor: "pointer"}}
                                />
                            </div>
                            <div className={cn(styles.buttonWrapper, styles.deleteButtonWrapper)}>
                                <img className={cn(styles.deleteButton)}
                                     src={deleteNoteButton}
                                     alt="Delete Note"
                                     style={{cursor: "pointer"}}
                                />
                            </div>
                        </div>
                    )}
                </div>

            </main>
        </SwampStyle>
    );
};

export default NotePage;
