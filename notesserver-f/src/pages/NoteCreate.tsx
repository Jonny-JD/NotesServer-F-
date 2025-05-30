import React from "react";
import cn from "classnames";
import styles from "../styles/page/create_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";

import createNoteButton from "@/assets/img/swamp/svg/create_note_button.svg";
import privateButton from "@/assets/img/swamp/svg/private_button.svg";


const currentPage = 5;
const totalPages = 7;

const NoteCreatePage: React.FC = () => {
    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <div className={styles.newNoteFormWrapper}>
                    <form className={styles.noteForm} method="get" action="">
                        <div className={styles.formField}>
                            <label htmlFor="note-title">Title:</label>
                            <input type="text" name="note-title" id="note-title" required/>
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="note-tag">Tag:</label>
                            <input type="text" name="note-tag" id="note-tag" required/>
                        </div>
                        <div className={cn(styles.formField, styles.noteTextWrapper)}>
                            <textarea className={styles.hideScrollbar} name="note-text" id="note-text" rows={10} cols={10}/>
                        </div>
                        <div className={styles.formButtonsWrapper}>
                            <div className={styles.buttonWrapper}>
                                <img src={createNoteButton} alt="Create Note"/>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <img src={privateButton} alt="Private Note"/>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </SwampStyle>
    );
};

export default NoteCreatePage;
