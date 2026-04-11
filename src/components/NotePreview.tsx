import type {ReactNode} from "react";
import type {NotePreviewDto} from "./types.ts";
import styles from "../styles/components/NotePreview.module.css"
import userIcon from "../assets/icons/user_icon.svg";
import calendarIcon from "../assets/icons/calendar_icon.svg";
import noteUnderscore from "../assets/note_underscore.svg";


export const NotePreview = (props: NotePreviewDto): ReactNode => {
    const noteId = props.id;
    const title = props.title?? "Untitled";
    const author = props.author;
    const createdAt = props.createdAt;

    return (
        <div className={styles.note}>
            <a href={`/notes/${noteId}`} className={`${styles.noteHeader} ${styles.noteField}`}>
                {title}
            </a>
            <div className={styles.noteDataWrapper}>
                <div className={styles.noteField}>
                    <img className={styles.noteIco} src={userIcon} alt={"user_ico"}/>
                    <span>{author}</span>
                </div>

                <div className={styles.noteField}>
                    <img className={styles.noteIco} src={calendarIcon} alt={"calendar_ico"}/>
                    <span className={styles.noteDate}>{new Date(createdAt).toDateString()}</span>
                </div>
            </div>
            <div className={styles.noteUnderscoreContainer}>
                <picture>
                    <img className={styles.noteUnderscore} src={noteUnderscore} alt={"note_underscore"}/>
                </picture>
            </div>
        </div>
    )
}