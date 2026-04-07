import {type JSX, useState} from "react";
import styles from "../styles/pages/DiscoverPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import {LazyScrollNotes} from "../components/lazy-scroll/LazyScrollNotes.tsx";
import type {NotePreviewDto} from "../components/types.ts";



export const DiscoverPage = (): JSX.Element => {
    const [filter, setFilter] = useState(false);

    const notesForRender: NotePreviewDto[] = [
        {id: 1, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 2, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
        {id: 3, title: "test", tag: "tag", author: "author", createdAt: "10.11.2001"},
    ];

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <LazyScrollNotes notes={notesForRender}/>
            </div>
            <div className={styles.interaction}>
                {filter && <OptionsBlock header={"FILTER BY:"}
                               fieldNames={["TAG", "TITLE", "AUTHOR", "DATE"]}
                               buttonName={"FILTER"}
                               onSubmit={(data) => {
                                   console.log(data);
                                   setFilter(!filter);
                               }}/>}

                {!filter && <button onClick={(() => setFilter(!filter))}>FILTER</button>}
            </div>
        </div>
    );
} //TODO fetch