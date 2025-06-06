import React from "react";
import headerStyles from "../styles/shared/header/home_header.module.less";
import pageStyles from "../styles/shared/home_shared.module.less";
import textStyles from "../styles/page/not_found.module.less";
import footerLine from "@/assets/img/red/svg/footer_line.svg";
import logo from "@/assets/img/red/svg/logo.svg";
import logoText from "@/assets/img/red/svg/logo_text.svg";
import officersText from "@/assets/img/red/svg/officers_text.svg";
import topLine from "@/assets/img/red/svg/top_line.svg";



const NotFoundPage: React.FC = () => {
    return (
        <div className={pageStyles.wrapper}>
            <div className={pageStyles.container}>
                <header className={headerStyles.header}>
                    <div className={headerStyles.headerLeft}>
                        <div className={headerStyles.logoContainer}>
                            <img className={headerStyles.logo} src={logo} alt="Logo"/>
                            <div className={headerStyles.logoTextWrapper}>
                                <img className={headerStyles.logoText} src={logoText} alt="Logo Text"/>
                                <img className={headerStyles.officersText} src={officersText} alt="Officers Text"/>
                            </div>
                        </div>
                    </div>
                    <div className={headerStyles.redLine}>
                        <img className={headerStyles.line} src={topLine} alt="Top Line"/>
                    </div>
                </header>
                <main className={pageStyles.main}>
                    <div className={textStyles.textContainer}><span>404. Page not found.</span></div>
                </main>
                <footer className={pageStyles.footer}>
                    <div className={pageStyles.footerLine}>
                        <img className={pageStyles.redLine} src={footerLine} alt="Footer Line"/>
                    </div>
                </footer>
            </div>
        </div>
    )



};

export default NotFoundPage;