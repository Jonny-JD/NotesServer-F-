import type {JSX} from "react";
import styles from "../styles/pages/DiscoverPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";


export const DiscoverPage = (): JSX.Element => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
            </div>
            <div className={styles.interaction}>
                <OptionsBlock header={"FILTER BY:"} fieldNames={["TAG", "TITLE", "AUTHOR", "DATE"]}
                              buttonName={"FILTER"}/>
            </div>
        </div>
    );
}