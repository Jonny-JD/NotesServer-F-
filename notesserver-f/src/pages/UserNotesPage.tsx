
import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import ScrollingNotesListUserNotes from "../components/ScrollingNotesListUserNotes.tsx";
import React from "react";


const currentPage = 5;
const totalPages = 7;


const UserNotesPage: React.FC = () => {


    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <ScrollingNotesListUserNotes></ScrollingNotesListUserNotes>
            </main>
        </SwampStyle>
    );
};

export default UserNotesPage;
