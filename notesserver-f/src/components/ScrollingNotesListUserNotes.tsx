import React, {useCallback, useEffect, useState} from "react";
import styles from "../styles/shared/scrolling_notes_list.module.less";
import {FixedSizeList as List} from "react-window";
import cn from "classnames";
import {formatISO} from "date-fns";
import {useElementHeight} from "../hook/useElementHeight.tsx";
import {useResponsiveRatio} from "../hook/useResponsiveRatio.tsx";
import {useNavigate} from "react-router-dom";

interface NotePreviewDto {
    id: number;
    title: string;
    tag: string;
    author: string;
    createdAt: string;
}

const PAGE_SIZE = 10;

const sizes: { maxWidth: number; multiplier: number; }[] = [];
let maxWidth = 400;
let multiplier = 0.24;

while (maxWidth <= 8000) {
    sizes.push({maxWidth, multiplier});
    maxWidth += 100;
    multiplier += 0.08;
}


const ScrollingNotesListUserNotes: React.FC = () => {
    const [notes, setNotes] = useState<NotePreviewDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [fromTime, setFromTime] = useState<string>(formatISO(new Date()));
    const [containerRef, listHeight] = useElementHeight<HTMLDivElement>();
    const ratio = useResponsiveRatio();
    const [itemHeight, setItemHeight] = useState(70);
    const navigate = useNavigate();


    const loadNotes = useCallback(
        async (from: string) => {
            if (loading || !hasMore) return;
            setLoading(true);
            try {
                const res = await fetch(
                    `/api/notes/user-notes?from=${encodeURIComponent(from)}`
                );
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
                    const lastNoteTime = newNotes[newNotes.length - 1].createdAt;
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
        const width = window.innerWidth;
        const size = sizes.find((s) => width <= s.maxWidth);

        if (size) {
            setItemHeight(ratio * size.multiplier * 100);
        } else {
            setItemHeight(70);
        }
    }, [ratio]);

    useEffect(() => {
        void loadNotes(fromTime);
    }, []);

    const handleItemsRendered = ({visibleStopIndex}: { visibleStopIndex: number }) => {
        if (visibleStopIndex >= notes.length - 1 && !loading && hasMore) {
            void loadNotes(fromTime);
        }
    };

    const goToNote = (noteId: number | string) => {
        navigate(`/notes/${noteId}`);
    };

    return (
        <div className={styles.notesListWrapper}>
            <div className={styles.notesListHeader}>
                <div>Note</div>
                <div>Posted</div>
            </div>
            <div ref={containerRef} className={styles.notesList}>
                {listHeight > 0 && (
                    <List
                        className={styles.scrollList}
                        height={listHeight}
                        itemCount={notes.length + (hasMore ? 0 : 1)}
                        itemSize={itemHeight}
                        width="100%"
                        onItemsRendered={handleItemsRendered}
                    >
                        {({index, style}) => {
                            if (index < notes.length) {
                                const note = notes[index];
                                return (
                                    <div style={style} key={note.id} className={styles.noteWrapper}>
                                        <div className={styles.note} onClick={() => goToNote(note.id)}>
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
                                        <div className={styles.posted}>
                      <span className={styles.postedDate}>
                        {new Date(note.createdAt).toLocaleDateString()}
                      </span>
                                            <span className={styles.postedTime}>
                        {new Date(note.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        })}
                      </span>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div style={style} className={styles.lastElementWrapper}>
                                        <div className={styles.lastMessage}>
                                            <span>No more notes</span>
                                        </div>
                                    </div>
                                );
                            }
                        }}
                    </List>
                )}
                {loading && (
                    <div className={styles.lastElementWrapper}>
                        <div className={styles.lastMessage}>
                            <span>Loading</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollingNotesListUserNotes;
