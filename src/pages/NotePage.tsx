import {type JSX, useEffect, useState} from "react";
import styles from "../styles/pages/NotePage.module.css"
import {useParams} from "react-router-dom";
import type {Note} from "../components/types";
import api from "../api/axios.ts";


export const NotePage = (): JSX.Element => {
    const {id} = useParams();
    const [note, setNote] = useState<Note | null>(null);

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
            <div className={styles.mainContent}>
                <div>{note?.content}</div>
            </div>
            <div className={styles.interaction}>
                <button>GET LINK</button>
            </div>
        </div>
    );
}