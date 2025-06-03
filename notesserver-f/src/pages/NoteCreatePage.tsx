import React, {useState} from "react";
import cn from "classnames";
import styles from "../styles/page/create_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import {useAuth} from "../context/AuthContext.tsx";

import createNoteButton from "@/assets/img/swamp/svg/create_note_button.svg";
import privateButton from "@/assets/img/swamp/svg/private_button.svg";

const currentPage = 5;
const totalPages = 7;

const NoteCreatePage: React.FC = () => {
    const {user} = useAuth(); // 👈 получаем текущего пользователя

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false);

    const handleCreateNote = async () => {
        setError(null);
        setSuccess(false);

        if (!user) {
            setError("User not authenticated");
            return;
        }

        console.log("User ID:", user);

        try {
            const response = await fetch("/api/notes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title,
                    tag,
                    content,
                    author: user,
                    isPrivate,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Failed to create note");
                return;
            }

            setTitle("");
            setTag("");
            setContent("");
            setSuccess(true);
        } catch {
            setError("Network error");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleCreateNote();
    };

    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <div className={styles.newNoteFormWrapper}>
                    <form className={styles.noteForm} onSubmit={handleSubmit}>
                        {error && <p style={{color: "red"}}>{error}</p>}
                        {success && <p style={{color: "green"}}>Note created successfully!</p>}

                        <div className={styles.formField}>
                            <label htmlFor="note-title">Title:</label>
                            <input
                                type="text"
                                name="note-title"
                                id="note-title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="note-tag">Tag:</label>
                            <input
                                type="text"
                                name="note-tag"
                                id="note-tag"
                                required
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                        </div>
                        <div className={cn(styles.formField, styles.noteTextWrapper)}>
                            <textarea
                                className={styles.hideScrollbar}
                                name="note-text"
                                id="note-text"
                                rows={10}
                                cols={10}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className={styles.formButtonsWrapper}>
                            <div className={styles.buttonWrapper}>
                                <img
                                    src={createNoteButton}
                                    alt="Create Note"
                                    onClick={handleSubmit}
                                    style={{cursor: "pointer"}}
                                />
                            </div>
                            <div className={styles.buttonWrapper}>
                                <img className={cn(styles.isPrivateButton, {[styles.isPrivateButtonActive]: isPrivate})}
                                     src={privateButton}
                                     alt="Private Note"
                                     onClick={() => setIsPrivate(!isPrivate)}
                                     style={{cursor: "pointer"}}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </SwampStyle>
    );
};

export default NoteCreatePage;
