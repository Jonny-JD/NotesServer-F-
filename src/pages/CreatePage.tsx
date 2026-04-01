import {type JSX, useRef} from "react";
import styles from "../styles/pages/CreatePage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import api from "../api/axios.ts";
import {useAuth} from "../hook/useAuth.ts";

export const CreatePage = (): JSX.Element => {
    const {user} = useAuth();
    const noteContentRef = useRef<HTMLTextAreaElement>(null);

    let fieldNames;
    if (user == null) {
        fieldNames = ["TAG", "TITLE"];
    }
    else {
        fieldNames = ["TAG", "TITLE", "PRIVATE"];
    }
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <textarea id={"note-text"} ref={noteContentRef}></textarea>
            </div>
            <div className={styles.interaction}>
                <OptionsBlock header={"NOTE OPTIONS:"}
                              fieldNames = {fieldNames}
                              buttonName={"CREATE"}
                              onSubmit={async (data) => {
                                  const payload = {
                                      ...data,
                                      author: user?? null,
                                      content: noteContentRef.current?.value?? "",
                                      isPrivate: data.private === "on"
                                  };
                                  await api.post("/notes", payload);
                              }
                }/>
            </div>
        </div>
    );
}

//TODO fetch