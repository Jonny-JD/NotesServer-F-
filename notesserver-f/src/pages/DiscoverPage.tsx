import React, { useEffect, useState, useRef, useCallback } from "react";
import cn from "classnames";
import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";
import { formatISO } from "date-fns";

interface UserReadDto {
    id: number;
    username: string;
    email: string;
    roles: string[];
}

interface NotePreviewDto {
    id: number;
    title: string;
    tag: string;
    author: UserReadDto;
    postedAt: string;
}

const currentPage = 5;
const totalPages = 7;

const PAGE_SIZE = 10;

const DiscoverPage: React.FC = () => {
    const [notes, setNotes] = useState<NotePreviewDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [fromTime, setFromTime] = useState<string>(formatISO(new Date()));

    const notesListRef = useRef<HTMLDivElement>(null);

    // Загрузка заметок с конкретного времени
    const loadNotes = useCallback(
        async (from: string) => {
            if (loading || !hasMore) return;
            setLoading(true);
            try {
                const res = await fetch(`/api/fresh?from=${encodeURIComponent(from)}&limit=${PAGE_SIZE}`);
                if (!res.ok) {
                    console.error("Failed to load fresh notes:", res.statusText);
                    setLoading(false);
                    return;
                }
                const newNotes: NotePreviewDto[] = await res.json();

                if (newNotes.length < PAGE_SIZE) {
                    setHasMore(false);
                }
                setNotes((prev) => [...prev, ...newNotes]);

                if (newNotes.length > 0) {
                    const lastNoteTime = newNotes[newNotes.length - 1].postedAt;
                    setFromTime(lastNoteTime);
                }
            } catch (e) {
                console.error("Error loading fresh notes:", e);
            } finally {
                setLoading(false);
            }
        },
        [loading, hasMore]
    );

    useEffect(() => {
        async function fetchNotes() {
            await loadNotes(fromTime);
        }
        void fetchNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleScroll = async () => {
        if (!notesListRef.current || loading || !hasMore) return;

        const { scrollTop, scrollHeight, clientHeight } = notesListRef.current;
        if (scrollHeight - scrollTop <= clientHeight + 50) {
            await loadNotes(fromTime);
        }
    };

    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <div className={styles.notesListWrapper}>
                    <div className={styles.notesListHeader}>
                        <div>Note</div>
                        <div>Posted</div>
                    </div>
                    <div
                        className={styles.notesList}
                        ref={notesListRef}
                        onScroll={handleScroll}
                        style={{ overflowY: "auto", maxHeight: "70vh" }}
                    >
                        {notes.map((note) => (
                            <div key={note.id} className={styles.noteWrapper}>
                                <div className={styles.note}>
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
                                <div className={styles.posted}>
                  <span className={styles.postedDate}>
                    {new Date(note.postedAt).toLocaleDateString()}
                  </span>
                                    <span className={styles.postedTime}>
                    {new Date(note.postedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                                </div>
                            </div>
                        ))}
                        {loading && <div>Loading...</div>}
                        {!hasMore && <div>No more notes</div>}
                    </div>
                </div>
            </main>
        </SwampStyle>
    );
};

export default DiscoverPage;
