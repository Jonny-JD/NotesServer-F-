
import styles from "../styles/pages/MainPage.module.css"
import {Wrapper} from "../components/wrapper/Wrapper.tsx";
import type {JSX} from "react";


export const MainPage= (): JSX.Element => {
    return (
        <Wrapper>
            <main className="main">
                <div className={styles.mainContent}>
                </div>
                <div className={styles.interaction}>
                </div>
            </main>
         </Wrapper>
    );
};
