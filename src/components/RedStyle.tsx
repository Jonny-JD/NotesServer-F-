import React from "react";
import styles from "../styles/shared/home_shared.module.less";
import footerLine from "@/assets/img/red/svg/footer_line.svg";
import sideNumber from "@/assets/img/red/svg/side_number.svg";
import HomeHeader from "./header/HomeHeader.tsx";
import mainGear from "@/assets/img/red/svg/main_gear.svg";
import japanMain from "@/assets/img/red/svg/japan_main.svg";
import redNumber from "@/assets/img/red/svg/side_number.svg";
import ScrollContainer from "react-indiana-drag-scroll";
import cn from "classnames";

interface RedStyleProps {
    children: React.ReactNode;
    currentPage: number;
    totalPages: number;
}

const RedStyle: React.FC<RedStyleProps> = ({children, currentPage, totalPages}) => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <img className={styles.sideNumber} src={sideNumber} alt="side-number"/>
            <HomeHeader currentPage={currentPage} totalPages={totalPages}/>
            <ScrollContainer className={cn(styles.main, styles.scrollConatiner)} hideScrollbars={true}>
                <img className={styles.redNumber} src={redNumber} alt="Red Number"/>
                <main className={styles.main}>
                    <div className={styles.mainHeaderContainer}>
                        <div className={styles.mainGearContainer}>
                            <img className={styles.gearImage} src={mainGear} alt="Main Gear"/>
                            <img className={styles.headerJapan} src={japanMain} alt="Japan Main"/>
                        </div>
                        <div className={styles.headerText}>
                            <span>DIGITAL NOTES</span>
                        </div>
                    </div>


                    {children}

                </main>
            </ScrollContainer>
            <footer className={styles.footer}>
                <div className={styles.footerLine}>
                    <img className={styles.redLine} src={footerLine} alt="Footer Line"/>
                </div>
            </footer>
        </div>
    </div>
);

export default RedStyle;
