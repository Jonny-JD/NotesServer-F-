import {type JSX, useState} from "react";
import styles from "../styles/pages/DiscoverPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";
import {NotePreview} from "../components/NotePreview.tsx";


export const DiscoverPage = (): JSX.Element => {
    const [filter, setFilter] = useState(false);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
                <NotePreview id={1} title={"test"} tag={"test"} author={"test"} createdAt={"17.01.24"}/>
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