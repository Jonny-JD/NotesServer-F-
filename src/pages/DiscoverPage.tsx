import { type JSX, useState } from "react";
import styles from "../styles/pages/DiscoverPage.module.css";
import { OptionsBlock } from "../components/main/OptionsBlock.tsx";
import { LazyScrollNotes } from "../components/lazy-scroll/LazyScrollNotes.tsx";
import { useNotesPagination, type NotesPaginationProps } from "../hook/useNotesPagination.ts";

export const DiscoverPage = (): JSX.Element => {

    const [notesFilter, setNotesFilter] = useState(false);
    const [filterParams, setFilterParams] = useState<NotesPaginationProps>({});
    const { notes, loadNotes } = useNotesPagination(filterParams);
    const fields: Record<string, string | boolean> [] = [
        { tag: "" },
        { title: "" },
        { author: "" },
    ];

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <LazyScrollNotes notes={notes} onLoadMore={loadNotes} />
            </div>
            <div className={styles.interaction}>
                {notesFilter && (
                    <OptionsBlock
                        header={"FILTER BY:"}
                        fields={fields}
                        buttonName={"FILTER"}
                        onSubmit={(data) => {
                            setFilterParams({
                                tag: (data.tag as string) || undefined,
                                title: (data.title as string) || undefined,
                                author: (data.author as string) || undefined
                            });
                            setNotesFilter(false);
                        }}
                    />
                )}
                {!notesFilter && (
                    <button onClick={() => setNotesFilter(true)}>FILTER</button>
                )}
            </div>
        </div>
    );
};