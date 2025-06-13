import React, {useState} from "react";

import styles from "../styles/page/search_page.module.less";

import searchButton from "@/assets/img/swamp/svg/search_button.svg";
import SwampStyle from "../components/SwampStyle.tsx";

import cn from "classnames";
import ScrollingNotesListSearchNotes from "../components/scrollList/ScrollingNotesListSearchNotes.tsx";


const currentPage = 7;
const totalPages = 8;

const SearchPage: React.FC = () => {
    const [searchBy, setSearchBy] = useState<"title" | "tag">("title");
    const [searchValue, setSearchValue] = useState("");
    const [submittedSearch, setSubmittedSearch] = useState<{
        searchBy: "title" | "tag";
        searchValue: string
    } | null>(null);


    const handleSearchClick = () => {
        if (searchValue.trim()) {
            setSubmittedSearch({searchBy, searchValue: searchValue.trim()});
        }
    };


    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <div className={styles.searchBlockWrapper}>
                    <div className={styles.searchFieldWrapper}>
                        <div className={styles.searchChoice}>
                            <span className={styles.searchHeader}>Search by:</span>
                            <span
                                className={cn(styles.byTitle, {[styles.selected]: searchBy === "title"})}
                                onClick={() => setSearchBy("title")}
                            >
                Title
              </span>
                            <span
                                className={cn(styles.byTag, {[styles.selected]: searchBy === "tag"})}
                                onClick={() => setSearchBy("tag")}
                            >
                Tag
              </span>
                        </div>
                        <div className={styles.searchInputWrapper}>
                            <input
                                type="search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleSearchClick();
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <img
                        className={`${styles.searchButton} ${styles.cButton}`}
                        src={searchButton}
                        alt="Search Button"
                        onClick={handleSearchClick}
                        style={{cursor: "pointer"}}
                    />
                </div>

                {submittedSearch && (
                    <ScrollingNotesListSearchNotes searchBy={submittedSearch.searchBy}
                                                   searchValue={submittedSearch.searchValue}/>
                )}
            </main>
        </SwampStyle>
    );
};

export default SearchPage;
