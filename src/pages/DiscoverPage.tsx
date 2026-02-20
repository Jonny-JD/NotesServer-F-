import type {JSX} from "react";
import {Wrapper} from "../components/wrapper/Wrapper.tsx";
import styles from "../styles/pages/DiscoverPage.module.css"
import {FilterBlock} from "../components/main/FilterBlock.tsx";


export const DiscoverPage = (): JSX.Element => {
    return (
        <Wrapper>
            <div className={styles.contentWrapper}>
                <div className={styles.mainContent}>
                </div>
                <div className={styles.interaction}>
                    <FilterBlock/>
                </div>
            </div>
        </Wrapper>

    );
}