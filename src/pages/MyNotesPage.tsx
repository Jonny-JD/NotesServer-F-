import {type JSX, useEffect, useState} from "react";
import styles from "../styles/pages/MyNotesPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import {useNotesPagination} from "../hook/useNotesPagination.ts";
import {LazyScrollNotes} from "../components/lazy-scroll/LazyScrollNotes.tsx";
import {useAuth} from "../hook/useAuth.ts";


export const MyNotesPage = (): JSX.Element => {
    const [notesFilter, setNotesFilter] = useState(false);
    const {user} = useAuth();
    const {notes, loadNotes, init} = useNotesPagination({authorId: user?.id});

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
                                              fieldNames={["TAG", "TITLE", "DATE"]}
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