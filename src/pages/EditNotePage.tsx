import {type JSX, useEffect, useRef, useState} from "react";
import styles from "../styles/pages/CreatePage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import api from "../api/axios.ts";
import {useAuth} from "../hook/useAuth.ts";
import {useParams} from "react-router-dom";
import type {Note} from "../components/types.ts";
import {useMessage} from "../hook/useMessage.ts";
import {SuccessMessage} from "../components/message/SuccessMessage.tsx";
import {ErrorMessage} from "../components/message/ErrorMessage.tsx";

export const EditNotePage = (): JSX.Element => {
    const {user} = useAuth();
    const noteContentRef = useRef<HTMLTextAreaElement>(null);
    const {id} = useParams();
    const [note, setNote] = useState<Note | null>(null);
    const [noteText, setNoteText] = useState("");
    const {success, setSuccess, error, setError} = useMessage();

    const fields: Record<string, string | boolean> [] = [
        {tag: note?.tag ?? ""},
        {title: note?.title ?? ""},
        {private: note?.isPrivate ?? false},
    ];

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await api.get(`/notes/${id}`);
                setNote(response.data);
                setNoteText(response.data.content);
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
                <textarea id={"note-text"}
                          ref={noteContentRef}
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                >

                </textarea>
            </div>
            {success && <SuccessMessage message={"Note successfully saved"}/>}
            {error && <ErrorMessage message={error}/>}
            <div className={styles.interaction}>
                {note && <OptionsBlock header={"NOTE OPTIONS:"}
                                       fields={fields}
                                       buttonName={"SAVE"}
                                       onSubmit={async (data) => {
                                           setSuccess(false);
                                           setError(null);
                                           const payload = {
                                               ...data,
                                               author: user ?? null,
                                               content: noteContentRef.current?.value ?? "",
                                               isPrivate: data['private'] === true || data['private'] === "on"
                                           };

                                           await api.put(`/notes/${id}`, payload)
                                               .then(_ => {
                                                   if (_.status == 200) {
                                                       setSuccess(true);
                                                   }
                                               }).catch(e => {
                                                   const data = e.response?.data;
                                                   setError(
                                                       data?.errors?.validation ??
                                                       data?.message ??
                                                       data?.error ??
                                                       "Failed to save note"
                                                   );
                                               });

                                       }
                                       }/>}
            </div>
        </div>
    );
}