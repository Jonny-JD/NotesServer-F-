
import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import ScrollingNotesListDiscover from "../components/ScrollingNotesListDiscover.tsx";
import React from "react";


const currentPage = 6;
const totalPages = 8;


const DiscoverPage: React.FC = () => {
    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <ScrollingNotesListDiscover></ScrollingNotesListDiscover>
            </main>
        </SwampStyle>
    );
};

export default DiscoverPage;
