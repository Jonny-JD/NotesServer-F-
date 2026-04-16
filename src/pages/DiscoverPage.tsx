import {type JSX, useEffect, useState} from "react";
import styles from "../styles/pages/DiscoverPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import {LazyScrollNotes} from "../components/lazy-scroll/LazyScrollNotes.tsx";
import {useNotesPagination} from "../hook/useNotesPagination.ts";


export const DiscoverPage = (): JSX.Element => {
    const [notesFilter, setNotesFilter] = useState(false);
    const {notes, loadNotes, init} = useNotesPagination();
    const fields: Record<string, string | boolean> [] = [
        { tag: "" },
        { title: "" },
        { author: "" },
        { date: ""},
    ];


    useEffect(() => {
        init();
    }, [init]);




    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <LazyScrollNotes
                    notes={notes}
                    onLoadMore={loadNotes}
                />
            </div>
            <div className={styles.interaction}>
                {notesFilter && <OptionsBlock header={"FILTER BY:"}
                                         fields={fields}
                                         buttonName={"FILTER"}
                                         onSubmit={(data) => {
                                             console.log(data);
                                             setNotesFilter(!notesFilter);
                                         }}/>}

                {!notesFilter && <button onClick={(() => setNotesFilter(!notesFilter))}>FILTER</button>}
            </div>
        </div>
    );
}