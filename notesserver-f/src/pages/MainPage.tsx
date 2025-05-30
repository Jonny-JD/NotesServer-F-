import React from "react";
import cn from "classnames";
import styles from "../styles/page/main_page.module.less";
import HomeHeader from "../components/HomeHeader.tsx";
import mainGear from "@/assets/img/red/svg/main_gear.svg";
import japanMain from "@/assets/img/red/svg/japan_main.svg";
import mainSignUpButton from "@/assets/img/red/svg/main_sign_up_button.svg";
import footerLine from "@/assets/img/red/svg/footer_line.svg";

const pageNumber = 1;
const totalPages = 7;

const MainPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <HomeHeader currentPage={pageNumber} totalPages={totalPages}/>
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
                    <div className={styles.mainButtonWrapper}>
                        <div className={cn(styles.buttonWrapper, styles.loginButtonWrapper)}>
                            <input
                                type="image"
                                className={cn(styles.headerButton, styles.cButton, styles.signUpMainB)}
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

export default MainPage;
