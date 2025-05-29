import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";
import cn from "classnames";
import styles from "../styles/login_page.module.less";
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
import footerLine from "@/assets/img/red/footer_line.svg";

type FormFields = "username" | "password";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { setUserId } = useAuth();

    const [form, setForm] = useState<Record<FormFields, string>>({
        username: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "username" || name === "password") {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Login failed");
                return;
            }

            const data = await response.json();
            setUserId(data.userId);
            navigate("/home");
        } catch {
            setError("Network error");
        }
    };

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
                                <img className={styles.logoText} src={logoText} alt="Logo Text" />
                                <img className={styles.officersText} src={officersText} alt="Officers Text" />
                            </div>
                            <div className={cn(styles.buttonWrapper, styles.discover)}>
                                <input
                                    type="image"
                                    className={cn(styles.discoverButton, styles.headerButton,  styles.cButton)}
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
                            <img className={styles.bar} src={headerBar} alt="Header Bar" />
                        </div>
                    </div>
                    <div className={styles.redLine}>
                        <img className={styles.line} src={topLine} alt="Top Line" />
                    </div>
                </header>

                <main className={styles.main}>
                    <div className={styles.mainHeaderContainer}>
                        <div className={styles.mainGearContainer}>
                            <img className={styles.gearImage} src={mainGear} alt="Main Gear" />
                            <img className={styles.headerJapan} src={japanMain} alt="Japan Main" />
                        </div>
                        <div className={styles.headerText}>
                            <span>DIGITAL NOTES</span>
                        </div>
                    </div>
                    <div className={styles.contentBackgroundCover}>
                        <div className={styles.registerFormWrapper}>
                            <form
                                className={styles.registerForm}
                                onSubmit={handleSubmit}
                                autoComplete="off"
                            >
                                {error && <p style={{ color: "red" }}>{error}</p>}

                                <div className={styles.formField}>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        value={form.username}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>

                                <div className={styles.mainButtonWrapper}>
                                    <div className={cn(styles.buttonWrapper, styles.loginButtonWrapper)}>
                                        <input
                                            type="image"
                                            className={cn(styles.headerButton, styles.cButton, styles.loginMainB)}
                                            src={loginButton}
                                            alt="Login Button"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <div className={styles.footerLine}>
                        <img className={styles.redLine} src={footerLine} alt="Footer Line" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;
