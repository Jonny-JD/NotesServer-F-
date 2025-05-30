import styles from "../styles/shared/inner_shared.module.less";
import cn from "classnames";
import React from "react";

import logo from "@/assets/img/swamp/svg/logo.svg";
import logoText from "@/assets/img/swamp/svg/logo_text.svg";
import officersText from "@/assets/img/swamp/svg/officers_text.svg";
import yourNotesButton from "@/assets/img/swamp/svg/your_notes_button.svg";
import discoverButton from "@/assets/img/swamp/svg/discover_button.svg";
import logoutButton from "@/assets/img/swamp/svg/logout_button.svg";
import headerBar from "@/assets/img/swamp/svg/header_bar.svg";
import topLine from "@/assets/img/swamp/svg/top_line.svg";


interface InnerHeaderProps {
    currentPage: number;
    totalPages: number;
}

const InnerHeader: React.FC<InnerHeaderProps> = ({currentPage, totalPages}) => (
    <header className={styles.header}>
        <div className={styles.pageCounter}>
            <span>{currentPage}/{totalPages}</span>
            <span className={styles.pagePage}>PAGE</span>
        </div>
        <div className={styles.headerLeft}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Logo"/>
                <div className={styles.logoTextWrapper}>
                    <img className={styles.logoText} src={logoText} alt="Logo Text"/>
                    <img className={styles.officersText} src={officersText} alt="Officers Text"/>
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                    <input
                        type="image"
                        className={cn(styles.headerButton, styles.cButton, styles.yourNotesButton)}
                        src={yourNotesButton}
                        alt="Your Notes"
                    />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                    <input
                        type="image"
                        className={cn(styles.headerButton, styles.cButton, styles.discoverButton)}
                        src={discoverButton}
                        alt="Discover"
                    />
                </div>
            </div>
        </div>
        <div className={styles.headerRight}>
            <div className={styles.menuContainer}>
                <div className={styles.menuButtons}>
                    <div className={styles.buttonWrapper}>
                        <input
                            type="image"
                            className={cn(styles.headerButton, styles.cButton)}
                            src={logoutButton}
                            alt="Logout"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.redBar}>
                <img className={styles.bar} src={headerBar} alt="Header Bar"/>
            </div>
        </div>
        <div className={styles.redLine}>
            <img className={styles.line} src={topLine} alt="Top Line"/>
        </div>
    </header>
)

export default InnerHeader;