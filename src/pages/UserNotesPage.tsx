import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import ScrollingNotesListUserNotes from "../components/scrollList/ScrollingNotesListUserNotes.tsx";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader.tsx";


const currentPage = 8;
const totalPages = 8;


const UserNotesPage: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);


    if (loading) {
        return <Loader/>;
    }


    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <ScrollingNotesListUserNotes></ScrollingNotesListUserNotes>
            </main>
        </SwampStyle>
    );
};

export default UserNotesPage;
