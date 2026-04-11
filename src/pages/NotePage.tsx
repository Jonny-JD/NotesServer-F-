import {type JSX, useEffect, useState} from "react";
import styles from "../styles/pages/NotePage.module.css"
import {useParams} from "react-router-dom";
import type {Note} from "../components/types";
import api from "../api/axios.ts";
import userIcon from "../assets/icons/user_icon.svg";
import calendarIcon from "../assets/icons/calendar_icon.svg";


async function copyLink() {
    await navigator.clipboard.writeText(globalThis.location.href);
    const btn = document.getElementById("copy-button");
    if (btn) {
        btn.textContent = "link copied";
        setTimeout(() => btn.textContent = "get link", 1000);
    }
}

export const NotePage = (): JSX.Element => {
    const {id} = useParams();
    const [note, setNote] = useState<Note | null>(null);
    const author = note?.author.username;
    const title = note?.title;
    const tag = note?.tag ?? "none";
    const createdAt = note?.createdAt ?? "00.00.00";
    const noteText = note?.content;


    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await api.get(`/notes/${id}`);
                setNote(response.data);
            } catch (e) {
                console.error(e);
            }
        };
        if (id) {
            fetchNote().catch(e => console.error(e));
        }
    }, [id]);



    return (
        <div className={styles.contentWrapper}>
            <div className={styles.noteDetails}>
                <div className={`${styles.noteHeader} ${styles.noteField}`}>
                    {title}
                </div>
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
            </div>
            <div className={styles.topButtons}>
                <div className={styles.left}>
                    <div className={styles.noteField}>
                        <span>tag: {tag}</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.noteField}>
                        <button className={`${styles.topButtons} ${styles.button}`} id={"copy-button"} onClick={copyLink}>get link</button>
                    </div>
                </div>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.noteText}>{noteText}</div>
            </div>
            <div className={styles.interaction}>
                <button>GET LINK</button>
            </div>
        </div>
    );
}