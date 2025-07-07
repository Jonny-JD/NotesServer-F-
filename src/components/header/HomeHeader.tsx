import styles from "../../styles/shared/header/home_header.module.less";
import cn from "classnames";
import React, {useState} from "react";

import logo from "@/assets/img/red/svg/logo.svg";
import logoText from "@/assets/img/red/svg/logo_text.svg";
import officersText from "@/assets/img/red/svg/officers_text.svg";
import discoverButton from "@/assets/img/red/svg/discover_button.svg";
import signUpButton from "@/assets/img/red/svg/sign_up_button.svg";
import loginButton from "@/assets/img/red/svg/login_button.svg";
import logOutButton from "@/assets/img/red/svg/log_out_button.svg";
import headerBar from "@/assets/img/red/svg/header_bar.svg";
import topLine from "@/assets/img/red/svg/top_line.svg";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.tsx";
import ErrorMessage from "../message/ErrorMessage.tsx";


interface HomeHeaderProps {
    currentPage: number;
    totalPages: number;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({currentPage, totalPages}) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { setUser } = useAuth();
    const [error, setError] = useState<string | null>(null);


    const goToHome = () => {
        navigate("/");
    };

    const goToLogin = () => {
        navigate("/login");
    };

    const goToRegistration = () => {
        navigate("/registration");
    };

    const goToDiscover = () => {
        navigate("/notes/discover");
    };

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

    return (

        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="Logo"/>
                    <div className={styles.logoTextWrapper}>
                        <img className={styles.logoText} src={logoText} alt="Logo Text" onClick={goToHome} />
                        <img className={styles.officersText} src={officersText} alt="Officers Text"/>
                    </div>
                    <div className={cn(styles.buttonWrapper, styles.discover)}>
                        <input
                            type="image"
                            className={cn(styles.discoverButton, styles.headerButton, styles.cButton)}
                            src={discoverButton}
                            alt="Discover Button"
                            onClick={goToDiscover}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuButtons}>
                        {user?.id == null &&(<div className={styles.buttonWrapper}>
                            <input
                                type="image"
                                className={cn(styles.headerButton, styles.cButton)}
                                src={signUpButton}
                                alt="Sign Up Button"
                                onClick={goToRegistration}
                            />
                        </div>)}
                        {user?.id == null && (<div className={styles.buttonWrapper}>
                            <input
                                type="image"
                                className={cn(styles.headerButton, styles.cButton)}
                                src={loginButton}
                                alt="Login Button"
                                onClick={goToLogin}
                            />
                        </div>)}
                        {user?.id != null && (<div className={styles.buttonWrapper}>
                            <input
                                type="image"
                                className={cn(styles.headerButton, styles.cButton)}
                                src={logOutButton}
                                alt="Logout Button"
                                onClick={handleLogout}
                            />
                            {error && <ErrorMessage message={error}/>}
                        </div>)}
                        <div className={styles.pageCounter}>
                            <span>{currentPage}/{totalPages}</span>
                            <span className={styles.pagePage}>PAGE</span>
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
};

export default HomeHeader