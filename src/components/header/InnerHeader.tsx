import styles from "../../styles/shared/header/inner_header.module.less";
import cn from "classnames";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.tsx";
import { useLocation } from "react-router-dom";

import logo from "@/assets/img/swamp/svg/logo.svg";
import logoText from "@/assets/img/swamp/svg/logo_text.svg";
import officersText from "@/assets/img/swamp/svg/officers_text.svg";
import yourNotesButton from "@/assets/img/swamp/svg/your_notes_button.svg";
import searchButton from "@/assets/img/swamp/svg/search_button.svg";
import discoverButton from "@/assets/img/swamp/svg/discover_button.svg";
import newNoteButon from "@/assets/img/swamp/svg/new_note_button.svg";
import logoutButton from "@/assets/img/swamp/svg/logout_button.svg";
import headerBar from "@/assets/img/swamp/svg/header_bar.svg";
import topLine from "@/assets/img/swamp/svg/top_line.svg";
import ErrorMessage from "../message/ErrorMessage.tsx";

interface InnerHeaderProps {
    currentPage: number;
    totalPages: number;
}



const InnerHeader: React.FC<InnerHeaderProps> = ({ currentPage, totalPages }) => {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();
    const path = location.pathname;



    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
                method: "POST",
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Logout failed");
                return;
            }

            localStorage.clear();
            setUser(null);
            navigate("/");
        } catch {
            setError("Network error");
        }
    };


    const goToYourNotes = () => {
        navigate("/notes/my");
    };

    const goToDiscover = () => {
        navigate("/notes/discover");
    };

    const goToSearch = () => {
        navigate("/notes/search");
    };
    const goToNoteCreate = () => {
        navigate("/notes/create");
    };


    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="Logo" />
                    <div className={styles.logoTextWrapper}>
                        <img className={styles.logoText} src={logoText} alt="Logo Text" />
                        <img className={styles.officersText} src={officersText} alt="Officers Text" />
                    </div>
                    <div className={styles.discoverContainer}>
                        {path !== "/notes/search" && (
                            <div className={cn(styles.buttonWrapper, styles.discover)}>
                                <input
                                    type="image"
                                    className={cn(styles.headerButton, styles.cButton)}
                                    src={searchButton}
                                    alt="Your Notes"
                                    onClick={goToSearch}
                                />
                            </div>
                        )}
                        {path !== "/my" && (
                            <div className={cn(styles.buttonWrapper, styles.discover)}>
                                <input
                                    type="image"
                                    className={cn(styles.headerButton, styles.cButton)}
                                    src={yourNotesButton}
                                    alt="Your Notes"
                                    onClick={goToYourNotes}
                                />
                            </div>
                        )}
                        {path !== "/notes/discover" && (
                            <div className={cn(styles.buttonWrapper, styles.discover)}>
                                <input
                                    type="image"
                                    className={cn(styles.headerButton, styles.cButton)}
                                    src={discoverButton}
                                    alt="Discover"
                                    onClick={goToDiscover}
                                />
                            </div>
                        )}
                        <div className={cn(styles.buttonWrapper, styles.discover, styles.pushDown)}>
                            <input
                                type="image"
                                className={cn(styles.headerButton, styles.cButton)}
                                src={newNoteButon}
                                alt="New Note"
                                onClick={goToNoteCreate}
                            />
                        </div>
                        {error && <ErrorMessage message={error}/>}
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
                                onClick={handleLogout}
                            />
                        </div>
                        <div className={styles.pageCounter}>
                            <span>{currentPage}/{totalPages}</span>
                            <span className={styles.pagePage}>PAGE</span>
                        </div>
                    </div>
                </div>
                <div className={styles.redBar}>
                    <img className={styles.bar} src={headerBar} alt="Header Bar" />
                </div>
            </div>
            <div className={styles.redLine}>
                <img className={styles.line} src={topLine} alt="Top Line" />
            </div>
        </header>
    );
};

export default InnerHeader;
