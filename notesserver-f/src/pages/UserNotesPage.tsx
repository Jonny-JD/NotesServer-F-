
import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import ScrollingNotesList from "../components/ScrollingNotesList.tsx";
import React from "react";


const currentPage = 5;
const totalPages = 7;


const DiscoverPage: React.FC = () => {


    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <ScrollingNotesList></ScrollingNotesList>
            </main>
        </SwampStyle>
    );
};

export default DiscoverPage;
