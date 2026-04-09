
import { useState, useCallback, useRef } from "react";
import type {NotePreviewDto} from "../components/types.ts";
import api from "../api/axios.ts";
import { formatISO } from "date-fns"

type NotesPaginationProps = {
    tag?: string;
    title?: string;
    authorId?: number;
}

export const useNotesPagination = (props: NotesPaginationProps = {}) => {
    const [notes, setNotes] = useState<NotePreviewDto[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const fromTime = useRef<string>(formatISO(new Date()));
    const initialized = useRef(false);

    const loadNotes = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const response = await api.get(`/notes/search`, {
                params: {
                    from: fromTime.current,
                    ...props
                }
            });
            const newNotes: NotePreviewDto[] = response.data;

            if (newNotes.length < 10) setHasMore(false);

            setNotes((prev) => [...prev, ...newNotes]);

            if (newNotes.length > 0) {
                fromTime.current = newNotes[newNotes.length - 1].createdAt;
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [loading, hasMore, props]);

    const init = useCallback(() => {
        if (initialized.current) return;
        initialized.current = true;
        void loadNotes();
    }, [loadNotes]);

    return { notes, hasMore, loading, loadNotes, init };
};