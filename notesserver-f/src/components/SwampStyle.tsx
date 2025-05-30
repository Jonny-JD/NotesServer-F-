import React from "react";
import InnerHeader from "./InnerHeader";
import styles from "../styles/shared/inner_shared.module.less";

import cn from "classnames";
import footerLine from "@/assets/img/swamp/svg/footer_line.svg";
import searchButton from "@/assets/img/swamp/svg/search_button.svg";


interface SwampStyleProps {
    children: React.ReactNode;
    currentPage: number;
    totalPages: number;
}


const SwampStyle: React.FC<SwampStyleProps> = ({children, currentPage, totalPages}) => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <InnerHeader currentPage={currentPage} totalPages={totalPages}/>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>FRESH NOTES</div>
                <div className={styles.note}>
                    <div className={cn(styles.noteItem, styles.header)}>
                        <span className={styles.noteHeader}>I need more ennies MutherFuckers!</span>
                    </div>
                    <div className={cn(styles.noteItem, styles.tag)}>
                        <span className={styles.noteTagHeader}>Tag:</span>
                        <span className={styles.noteTag}>Ennie problems</span>
                    </div>
                    <div className={cn(styles.noteItem, styles.author)}>
                        <span className={styles.noteAuthorHeader}>Author:</span>
                        <span className={styles.noteAuthor}>FreshDog@cbr.com</span>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <img className={cn(styles.cButton, styles.searchButton)} src={searchButton} alt="Search"/>
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
)

export default SwampStyle;