import React, {useEffect, useState} from "react";
import InnerHeader from "./header/InnerHeader.tsx";
import styles from "../styles/shared/inner_shared.module.less";
import {useNavigate} from "react-router-dom";

import cn from "classnames";
import footerLine from "@/assets/img/swamp/svg/footer_line.svg";
import {formatISO} from "date-fns"; // убедись, что установлен date-fns

interface SwampStyleProps {
    children: React.ReactNode;
    currentPage: number;
    totalPages: number;
}


interface NotePreviewDto {
    id: number;
    title: string;
    tag: string;
    author: string;
    link: string;
}

const SwampStyle: React.FC<SwampStyleProps> = ({children, currentPage, totalPages}) => {
    const [freshNotes, setFreshNotes] = useState<NotePreviewDto[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const loadFreshNotes = async () => {
            try {
                const now = formatISO(new Date());
                const res = await fetch(`/api/notes/search?from=${encodeURIComponent(now)}`);
                if (!res.ok) {
                    console.error("Failed to load fresh notes:", res.statusText);
                    return;
                }
                const data: NotePreviewDto[] = await res.json();
                setFreshNotes(data);
            } catch (e) {
                console.error("Error loading fresh notes:", e);
            }
        };

        void loadFreshNotes();
    }, []);

    const goToNote = (noteId: number | string) => {
        navigate(`/notes/${noteId}`);
    };
    const goToDiscover = () => {
        console.log("clicked!");
        navigate("/notes/discover");
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <InnerHeader currentPage={currentPage} totalPages={totalPages}/>
                <aside className={cn(styles.sidebar, styles.leftSidebar)}>
                    <div className={styles.sidebarHeader} onClick={goToDiscover}>FRESH NOTES</div>
                    {freshNotes.map(note => (
                        <div key={note.id} className={styles.note} onClick={() => goToNote(note.id)}>
                            <div className={cn(styles.noteItem, styles.header)}>
                                <span className={styles.noteHeader}>{note.title}</span>
                            </div>
                            <div className={cn(styles.noteItem, styles.tag)}>
                                <span className={styles.noteTagHeader}>Tag:</span>
                                <span className={styles.noteTag}>{note.tag}</span>
                            </div>
                            <div className={cn(styles.noteItem, styles.author)}>
                                <span className={styles.noteAuthorHeader}>Author:</span>
                                <span className={styles.noteAuthor}>{note.author}</span>
                            </div>
                        </div>
                    ))}
                </aside>

                {children}

                <aside className={cn(styles.sidebar, styles.rightSidebar)}>

                </aside>
                <footer className={styles.footer}>
                    <div className={styles.footerLine}>
                        <img className={styles.redLine} src={footerLine} alt="Footer Line"/>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SwampStyle;
