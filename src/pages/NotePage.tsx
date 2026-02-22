import type {JSX} from "react";
import styles from "../styles/pages/NotePage.module.css"


export const NotePage = (): JSX.Element => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
            </div>
            <div className={styles.interaction}>
                <button>GET LINK</button>
            </div>
        </div>
    );
}