import React from "react";
import cn from "classnames";
import styles from "../styles/styles.module.less";
import logo from "@/assets/img/red/logo.svg";
import logoText from "@/assets/img/red/logo_text.svg";
import officersText from "@/assets/img/red/officers_text.svg";
import discoverButton from "@/assets/img/red/discover_button.svg";
import signUpButton from "@/assets/img/red/sign_up_button.svg";
import loginButton from "@/assets/img/red/login_button.svg";
import headerBar from "@/assets/img/red/header_bar.svg";
import topLine from "@/assets/img/red/top_line.svg";
import mainGear from "@/assets/img/red/main_gear.svg";
import japanMain from "@/assets/img/red/japan_main.svg";
import mainSignUpButton from "@/assets/img/red/main_sign_up_button.svg";
import footerLine from "@/assets/img/red/footer_line.svg";

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
                            <img className={styles.logo} src={logo} alt="Logo" />
                            <div className={styles.logoTextWrapper}>
                                <img
                                    className={styles.logoText}
                                    src={logoText}
                                    alt="Logo Text"
                                />
                                <img
                                    className={styles.officersText}
                                    src={officersText}
                                    alt="Officers Text"
                                />
                            </div>
                            <div className={cn(styles.buttonWrapper, styles.discover)}>
                                <input
                                    type="image"
                                    className={cn(styles.headerButton, styles.cButton)}
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
                            <img
                                className={styles.bar}
                                src={headerBar}
                                alt="Header Bar"
                            />
                        </div>
                    </div>
                    <div className={styles.redLine}>
                        <img
                            className={styles.line}
                            src={topLine}
                            alt="Top Line"
                        />
                    </div>
                </header>
                <main className={styles.main}>
                    <div className={styles.mainHeaderContainer}>
                        <div className={styles.mainGearContainer}>
                            <img
                                className={styles.gearImage}
                                src={mainGear}
                                alt="Main Gear"
                            />
                            <img
                                className={styles.headerJapan}
                                src={japanMain}
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
                                src={mainSignUpButton}
                                alt="Main Sign Up Button"
                            />
                        </div>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <div className={styles.footerLine}>
                        <img
                            className={styles.redLine}
                            src={footerLine}
                            alt="Footer Line"
                        />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
