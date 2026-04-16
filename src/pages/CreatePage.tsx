import {type JSX, useRef} from "react";
import styles from "../styles/pages/CreatePage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import api from "../api/axios.ts";
import {useAuth} from "../hook/useAuth.ts";
import {useNavigate} from "react-router-dom";

export const CreatePage = (): JSX.Element => {
    const {user} = useAuth();
    const noteContentRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    let fields: Record<string, string | boolean>[];

    if (user == null) {
        fields = [
            {tag: ""},
            {title: ""}
        ];
    } else {
        fields = [
            {tag: ""},
            {title: ""},
            {private: false}
        ];
    }

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <textarea id={"note-text"} ref={noteContentRef}></textarea>
            </div>
            <div className={styles.interaction}>
                <OptionsBlock header={"NOTE OPTIONS:"}
                              fields={fields}
                              buttonName={"CREATE"}
                              onSubmit={async (data) => {
                                  const payload = {
                                      ...data,
                                      author: user ?? null,
                                      content: noteContentRef.current?.value ?? "",
                                      isPrivate: data['private'] === true || data['private'] === "on"
                                  };
                                  await api.post("/notes", payload);
                                  navigate("/notes/my")
                              }
                              }/>
            </div>
        </div>
    );
}