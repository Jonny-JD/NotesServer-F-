import {type JSX, useState} from "react";
import styles from "../styles/pages/MyNotesPage.module.css"
import {OptionsBlock} from "../components/main/OptionsBlock.tsx";


export const MyNotesPage = (): JSX.Element => {
    const [filter, setFilter] = useState(false);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
            </div>
            <div className={styles.interaction}>
                {filter && <OptionsBlock header={"FILTER BY:"}
                                         fieldNames={["TAG", "TITLE", "DATE"]}
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