import styles from "../styles/page/login_page.module.less";
import cn from "classnames";
import React from "react";

import logo from "@/assets/img/red/svg/logo.svg";
import logoText from "@/assets/img/red/svg/logo_text.svg";
import officersText from "@/assets/img/red/svg/officers_text.svg";
import discoverButton from "@/assets/img/red/svg/discover_button.svg";
import signUpButton from "@/assets/img/red/svg/sign_up_button.svg";
import loginButton from "@/assets/img/red/svg/login_button.svg";
import headerBar from "@/assets/img/red/svg/header_bar.svg";
import topLine from "@/assets/img/red/svg/top_line.svg";

interface HomeHeaderProps {
    currentPage: number;
    totalPages: number;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({currentPage, totalPages}) => (
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
                        className={cn(styles.discoverButton, styles.headerButton, styles.cButton)}
                        src={discoverButton}
                        alt="Discover Button"
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
                            src={signUpButton}
                            alt="Sign Up Button"
                        />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <input
                            type="image"
                            className={cn(styles.headerButton, styles.cButton)}
                            src={loginButton}
                            alt="Login Button"
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

export default HomeHeader