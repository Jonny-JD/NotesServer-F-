import { useState, useCallback, useRef, useEffect } from "react";
import type { NotePreviewDto } from "../components/types.ts";
import api from "../api/axios.ts";
import { formatISO } from "date-fns";

export type NotesPaginationProps = {
    tag?: string;
    title?: string;
    author?: string;
};

export const useNotesPagination = ({ tag, title, author }: NotesPaginationProps = {}) => {
    const [notes, setNotes] = useState<NotePreviewDto[]>([]);
    const [loading, setLoading] = useState(false);
    const fromTime = useRef<string>(formatISO(new Date()));
    const loadingRef = useRef(false);
    const hasMoreRef = useRef(true);

    const fetchNotes = useCallback(async (from: string) => {
        if (loadingRef.current || !hasMoreRef.current) return;
        loadingRef.current = true;
        setLoading(true);
        try {
            const response = await api.get(`/notes/search`, {
                params: { from, tag, title, author },
            });
            const newNotes: NotePreviewDto[] = response.data;

            if (newNotes.length < 10) hasMoreRef.current = false;
            setNotes((prev) => [...prev, ...newNotes]);

            if (newNotes.length > 0) {
                fromTime.current = newNotes[newNotes.length - 1].createdAt;
            }
        } catch (error) {
            console.log(error);
        } finally {
            loadingRef.current = false;
            setLoading(false);
        }
    }, [tag, title, author]);

    useEffect(() => {
        const freshFrom = formatISO(new Date());
        fromTime.current = freshFrom;
        hasMoreRef.current = true;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNotes([]);
        void fetchNotes(freshFrom);
    }, [fetchNotes]);

    const loadNotes = useCallback(() => {
        void fetchNotes(fromTime.current);
    }, [fetchNotes]);

    return { notes, loading, loadNotes };
};