import React, {useEffect, useState} from "react";
import InnerHeader from "./InnerHeader";
import styles from "../styles/shared/inner_shared.module.less";
import { useNavigate } from "react-router-dom";

import cn from "classnames";
import footerLine from "@/assets/img/swamp/svg/footer_line.svg";
import searchButton from "@/assets/img/swamp/svg/search_button.svg";
import {formatISO} from "date-fns"; // убедись, что установлен date-fns

interface SwampStyleProps {
    children: React.ReactNode;
    currentPage: number;
    totalPages: number;
}

interface UserReadDto {
    id: number;
    username: string;
    email: string;
    roles: string[];
}

interface NoteReadDto {
    id: number;
    title: string;
    text: string;
    tag: string;
    author: UserReadDto;
}

const SwampStyle: React.FC<SwampStyleProps> = ({children, currentPage, totalPages}) => {
    const [freshNotes, setFreshNotes] = useState<NoteReadDto[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadFreshNotes = async () => {
            try {
                const now = formatISO(new Date());
                const res = await fetch(`/api/fresh?from=${encodeURIComponent(now)}`);
                if (!res.ok) {
                    console.error("Failed to load fresh notes:", res.statusText);
                    return;
                }
                const data: NoteReadDto[] = await res.json();
                setFreshNotes(data);
            } catch (e) {
                console.error("Error loading fresh notes:", e);
            }
        };

        void loadFreshNotes();
    }, []);

    const goToSearch = () => {
        navigate("/note/search");
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <InnerHeader currentPage={currentPage} totalPages={totalPages}/>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>FRESH NOTES</div>
                    {freshNotes.map(note => (
                        <div key={note.id} className={styles.note}>
                            <div className={cn(styles.noteItem, styles.header)}>
                                <span className={styles.noteHeader}>{note.title}</span>
                            </div>
                            <div className={cn(styles.noteItem, styles.tag)}>
                                <span className={styles.noteTagHeader}>Tag:</span>
                                <span className={styles.noteTag}>{note.tag}</span>
                            </div>
                            <div className={cn(styles.noteItem, styles.author)}>
                                <span className={styles.noteAuthorHeader}>Author:</span>
                                <span className={styles.noteAuthor}>{note.author.email}</span>
                            </div>
                        </div>
                    ))}
                    <div>
                        <div className={styles.buttonWrapper}>
                            <input
                                type="image"
                                className={cn(styles.cButton, styles.searchButton)}
                                src={searchButton}
                                alt="Search"
                                onClick={goToSearch}
                            />
                        </div>
                    </div>
                </aside>

                {children}

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
