import type {ReactNode} from "react";
import {List, type RowComponentProps} from "react-window";
import type {NotePreviewDto} from "../types.ts";
import {NotePreview} from "../NotePreview.tsx";

function RowComponent({
                          index,
                          notes,
                          style
                      }: RowComponentProps<{ notes: NotePreviewDto[] }>) {
    return (
        <div className="lazy-list-item" style={style}>
            <NotePreview id={notes[index].id}
                         title={notes[index].title}
                         tag={notes[index].tag}
                         author={notes[index].author}
                         createdAt={notes[index].createdAt}
            />
        </div>
    );
}

interface Props {
    notes: NotePreviewDto[];
    onLoadMore: () => void;
}

export const LazyScrollNotes = ({notes, onLoadMore}: Props): ReactNode => {
    const rowHeight = 100;


    return (
        <List
            className={"lazy-scroll-list"}
            rowComponent={RowComponent}
            rowCount={notes.length}
            rowHeight={rowHeight}
            rowProps={{notes}}
            style={{width: "100%"}}
            onRowsRendered={(visibleRows) => {
                if (visibleRows.stopIndex >= notes.length - 1) {
                    onLoadMore();
                }
            }}
        />
    )
}