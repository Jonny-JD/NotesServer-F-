import React, {useEffect, useState} from "react";
import styles from "../styles/page/note_page.module.less";

import SwampStyle from "../components/SwampStyle.tsx";
import {useParams} from "react-router-dom";

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

    const {id} = useParams();
    const [note, setNote] = useState<NoteReadDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE}/notes/${id}`);
                if (!res.ok) {
                    console.error("Failed to load note");
                }
                const data: NoteReadDto = await res.json();
                setNote(data);
            } catch (e) {
                if(e instanceof Error) {
                    setError(e.message || "Unknown error");
                }
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchNote().catch(console.error);
        }
    }, [id]);

    if (loading) {
        return <div>Loading note...</div>;
    }

    if (error) {
        return <div>Error loading note: {error}</div>;
    }

    if (!note) {
        return <div>Note not found</div>;
    }


    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
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
                </div>
            </main>
        </SwampStyle>
    );
};

export default NotePage;
