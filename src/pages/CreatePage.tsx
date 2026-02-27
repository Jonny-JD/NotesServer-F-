import type {JSX} from "react";
import styles from "../styles/pages/CreatePage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";


export const CreatePage = (): JSX.Element => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <textarea id={"note-text"}></textarea>
            </div>
            <div className={styles.interaction}>
                <OptionsBlock header={"NOTE OPTIONS:"}
                              fieldNames={["TAG", "TITLE", "PRIVATE"]}
                              buttonName={"CREATE"}
                              onSubmit={(data) => console.log(data)}/>
            </div>
        </div>
    );
}

//TODO fetch