import {type JSX, useEffect, useRef, useState} from "react";
import styles from "../styles/pages/CreatePage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import api from "../api/axios.ts";
import {useAuth} from "../hook/useAuth.ts";
import {useNavigate, useParams} from "react-router-dom";
import type {Note} from "../components/types.ts";

export const EditNotePage = (): JSX.Element => {
    const {user} = useAuth();
    const noteContentRef = useRef<HTMLTextAreaElement>(null);
    const {id} = useParams();
    const [note, setNote] = useState<Note | null>(null);
    const [noteText, setNoteText] = useState("");

    const navigate = useNavigate();
    const fields = ["TAG", "TITLE", "PRIVATE"];

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

    useEffect(() => {
        if (note) {
            setNoteText(note.content)
        }
    }, [note]);


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
            <div className={styles.interaction}>
                <OptionsBlock header={"NOTE OPTIONS:"}
                              fieldNames={fields}
                              buttonName={"SAVE"}
                              onSubmit={async (data) => {
                                  const payload = {
                                      ...data,
                                      author: user ?? null,
                                      content: noteContentRef.current?.value ?? "",
                                      isPrivate: data.private === "on"
                                  };
                                  await api.put(`/notes/${id}`, payload);
                                  navigate("/notes/my")
                              }
                              }/>
            </div>
        </div>
    );
}