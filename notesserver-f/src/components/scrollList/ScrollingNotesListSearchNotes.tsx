import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "../../styles/shared/scrolling_notes_list_search.module.less";
import {FixedSizeList as List} from "react-window";
import cn from "classnames";
import {formatISO} from "date-fns";
import {useElementHeight} from "../../hook/useElementHeight.tsx";
import {useResponsiveRatio} from "../../hook/useResponsiveRatio.tsx";
import {useNavigate} from "react-router-dom";

interface NotePreviewDto {
    id: number;
    title: string;
    tag: string;
    author: string;
    createdAt: string;
}

interface ScrollingNotesListSearchNotesProps {
    searchBy: "title" | "tag";
    searchValue: string;
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

const ScrollingNotesListSearchNotes: React.FC<ScrollingNotesListSearchNotesProps> = ({searchBy, searchValue}) => {
    const [notes, setNotes] = useState<NotePreviewDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [containerRef, listHeight] = useElementHeight<HTMLDivElement>();
    const ratio = useResponsiveRatio();
    const [itemHeight, setItemHeight] = useState(70);
    const navigate = useNavigate();

    const fromTimeRef = useRef<string>(formatISO(new Date()));

    useEffect(() => {
        setNotes([]);
        setHasMore(true);
        const now = formatISO(new Date());
        fromTimeRef.current = now;
        loadNotes(now, true).then(() => {
        }).catch(console.error);
    }, [searchBy, searchValue]);

    const loadNotes = useCallback(
        async (from: string, initialLoad = false) => {
            if (loading) return;
            if (!hasMore && !initialLoad) return;
            setLoading(true);
            try {
                const params = new URLSearchParams();
                params.set("from", from);
                params.set(searchBy, searchValue);

                const res = await fetch(`/api/notes/search?${params.toString()}`);
                if (!res.ok) {
                    console.error("Failed to load fresh notes:", res.statusText);
                    return;
                }
                const newNotes: NotePreviewDto[] = await res.json();

                if (newNotes.length < PAGE_SIZE) {
                    setHasMore(false);
                }

                setNotes(prev => initialLoad ? newNotes : [...prev, ...newNotes]);

                if (newNotes.length > 0) {
                    fromTimeRef.current = newNotes[newNotes.length - 1].createdAt;
                }
            } catch (e) {
                console.error("Error loading fresh notes:", e);
            } finally {
                setLoading(false);
            }
        },
        [loading, hasMore, searchBy, searchValue]
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

    const handleItemsRendered = ({visibleStopIndex}: { visibleStopIndex: number }) => {
        if (visibleStopIndex >= notes.length - 1 && !loading && hasMore) {
            loadNotes(fromTimeRef.current).then(() => {
            }).catch(console.error);
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
                        itemCount={notes.length + 1} // всегда +1 для заглушки
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
                                // Последний элемент — заглушка с загрузкой или сообщением
                                return (
                                    <div style={style} className={styles.lastElementWrapper} key="last-element">
                                        <div className={styles.lastMessage}>
                                            {loading ? <span>Loading</span> : <span>No more notes</span>}
                                        </div>
                                    </div>
                                );
                            }
                        }}
                    </List>
                )}
            </div>
        </div>
    );
};

export default ScrollingNotesListSearchNotes;
