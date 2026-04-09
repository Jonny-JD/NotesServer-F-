import type {JSX} from "react";
import styles from "../styles/pages/EditNotePage.module.css"


export const NotePage = (): JSX.Element => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
            </div>
            <div className={styles.interaction}>
                <button>EDIT</button>
                <button className={"red-button"}>DELETE</button>
            </div>
        </div>
    );
}