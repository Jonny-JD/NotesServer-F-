import {type JSX, useState} from "react";
import styles from "../styles/pages/MyNotesPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import {type NotesPaginationProps, useNotesPagination} from "../hook/useNotesPagination.ts";
import {LazyScrollNotes} from "../components/lazy-scroll/LazyScrollNotes.tsx";
import {useAuth} from "../hook/useAuth.ts";


export const MyNotesPage = (): JSX.Element => {
    const [notesFilter, setNotesFilter] = useState(false);
    const {user} = useAuth();
    const [filterParams, setFilterParams] = useState<NotesPaginationProps>({author: user?.username});
    const {notes, loadNotes} = useNotesPagination(filterParams);
    const fields: Record<string, string | boolean> [] = [
        { tag: "" },
        { title: "" },
    ];


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
                                                  setFilterParams({
                                                      tag: (data.tag as string) || undefined,
                                                      title: (data.title as string) || undefined,
                                                      author: user?.username
                                                  });
                                                  setNotesFilter(!notesFilter);
                                              }}/>}

                {!notesFilter && <button onClick={(() => setNotesFilter(!notesFilter))}>FILTER</button>}
            </div>
        </div>
    );
}