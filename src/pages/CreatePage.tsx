import {type JSX, useRef} from "react";
import styles from "../styles/pages/CreatePage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import api from "../api/axios.ts";
import {useAuth} from "../hook/useAuth.ts";
import {SuccessMessage} from "../components/message/SuccessMessage.tsx";
import {useMessage} from "../hook/useMessage.ts";
import {ErrorMessage} from "../components/message/ErrorMessage.tsx";

export const CreatePage = (): JSX.Element => {
    const {user} = useAuth();
    const noteContentRef = useRef<HTMLTextAreaElement>(null);
    const {success, setSuccess, error, setError} = useMessage();

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
            {success && <SuccessMessage message={"Note successfully created"}/>}
            {error && <ErrorMessage message={error}/>}
            <div className={styles.interaction}>
                <OptionsBlock header={"NOTE OPTIONS:"}
                              fields={fields}
                              buttonName={"CREATE"}
                              onSubmit={async (data) => {
                                  setSuccess(false);
                                  setError(null);
                                  const payload = {
                                      ...data,
                                      author: user ?? null,
                                      content: noteContentRef.current?.value ?? "",
                                      isPrivate: data['private'] === true || data['private'] === "on"
                                  };

                                  await api.post("/notes", payload).then(_ => {
                                      if (_.status == 201) {
                                          setSuccess(true);
                                      }
                                  }).catch(e => {
                                      const data = e.response?.data;
                                      setError(
                                          data?.errors?.validation ??
                                          data?.message ??
                                          data?.error ??
                                          "Failed to create note"
                                      );
                                  });

                              }
                              }/>
            </div>
        </div>
    );
}