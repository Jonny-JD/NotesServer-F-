import React, { useState } from "react";

import styles from "../styles/page/search_page.module.less";

import searchButton from "@/assets/img/swamp/svg/search_button.svg";
import SwampStyle from "../components/SwampStyle.tsx";

import cn from "classnames";
const currentPage = 5;

const totalPages = 7;

const SearchPage: React.FC = () => {
    const [searchBy, setSearchBy] = useState<"title" | "tag">("title");

    return (
        <SwampStyle currentPage={currentPage} totalPages={totalPages}>
            <main className={styles.main}>
                <div className={styles.searchBlockWrapper}>
                    <div className={styles.searchFieldWrapper}>
                        <div className={styles.searchChoice}>
                            <span className={styles.searchHeader}>Search by:</span>
                            <span
                                className={cn(styles.byTitle, {
                                    [styles.selected]: searchBy === "title",
                                })}
                                onClick={() => setSearchBy("title")}
                            >
                                Title
                            </span>
                            <span
                                className={cn(styles.byTag, {
                                    [styles.selected]: searchBy === "tag",
                                })}
                                onClick={() => setSearchBy("tag")}
                            >
                                Tag
                            </span>
                        </div>
                        <div className={styles.searchInputWrapper}>
                            <input type="search"/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <img className={`${styles.searchButton} ${styles.cButton}`} src={searchButton}
                         alt="Search Button"/>
                </div>
            </main>
        </SwampStyle>
    );
};


export default SearchPage;
