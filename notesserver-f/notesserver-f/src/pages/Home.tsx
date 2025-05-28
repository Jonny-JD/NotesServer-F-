import React from "react";
import cn from "classnames";
import styles from "../styles/styles.module.less";

const HomePage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.pageCounter}>
                        <span>1/5</span>
                        <span className={styles.pagePage}>PAGE</span>
                    </div>
                    <div className={styles.headerLeft}>
                        <div className={styles.logoContainer}>
                            <img className={styles.logo} src="/img/red/logo.svg" alt="Logo" />
                            <div className={styles.logoTextWrapper}>
                                <img
                                    className={styles.logoText}
                                    src="/img/red/logo_text.svg"
                                    alt="Logo Text"
                                />
                                <img
                                    className={styles.officersText}
                                    src="/img/red/officers_text.svg"
                                    alt="Officers Text"
                                />
                            </div>
                            <div className={cn(styles.buttonWrapper, styles.discover)}>
                                <input
                                    type="image"
                                    className={cn(styles.headerButton, styles.cButton)}
                                    src="/img/red/discover_button.svg"
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
                                        src="/img/red/sign_up_button.svg"
                                        alt="Sign Up Button"
                                    />
                                </div>
                                <div className={styles.buttonWrapper}>
                                    <input
                                        type="image"
                                        className={cn(styles.headerButton, styles.cButton)}
                                        src="/img/red/login_button.svg"
                                        alt="Login Button"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.redBar}>
                            <img
                                className={styles.bar}
                                src="/img/red/header_bar.svg"
                                alt="Header Bar"
                            />
                        </div>
                    </div>
                    <div className={styles.redLine}>
                        <img
                            className={styles.line}
                            src="/img/red/top_line.svg"
                            alt="Top Line"
                        />
                    </div>
                </header>
                <main className={styles.main}>
                    <div className={styles.mainHeaderContainer}>
                        <div className={styles.mainGearContainer}>
                            <img
                                className={styles.gearImage}
                                src="/img/red/main_gear.svg"
                                alt="Main Gear"
                            />
                            <img
                                className={styles.headerJapan}
                                src="/img/red/japan_main.svg"
                                alt="Japan Main"
                            />
                        </div>
                        <div className={styles.headerText}>
                            <span>DIGITAL NOTES</span>
                        </div>
                    </div>
                    <div className={styles.contentBackgroundCover}>
                        <div className={styles.mainText}>
                            <p>
                                In the neon haze of future megacities, digital notes are your
                                cybernetic edge, pulsing with the speed of data streams.
                                Harness the power of your mind with our next-gen note
                                system—crafted for the fast-paced, tech-driven world. Capture,
                                organize, and access your thoughts anytime, anywhere.
                            </p>
                        </div>
                    </div>
                    <div className={cn(styles.mainSecButton, styles.cButton, styles.buttonWrapper)}>
                        <div className={styles.buttonWrapper}>
                            <input
                                type="image"
                                className={styles.mainButton}
                                src="/img/red/main_sign_up_button.svg"
                                alt="Main Sign Up Button"
                            />
                        </div>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <div className={styles.footerLine}>
                        <img
                            className={styles.redLine}
                            src="/img/red/footer_line.svg"
                            alt="Footer Line"
                        />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
