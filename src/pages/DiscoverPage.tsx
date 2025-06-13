
import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import ScrollingNotesListDiscover from "../components/scrollList/ScrollingNotesListDiscover.tsx";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader.tsx";

const currentPage = 6;
const totalPages = 8;


const DiscoverPage: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);


    if (loading) {
        return <Loader />;
    }
    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <ScrollingNotesListDiscover></ScrollingNotesListDiscover>
            </main>
        </SwampStyle>
    );
};

export default DiscoverPage;
