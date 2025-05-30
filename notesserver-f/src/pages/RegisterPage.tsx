import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import cn from "classnames";
import styles from "../styles/page/register_page.module.less";
import HomeHeader from "../components/HomeHeader.tsx";
import mainGear from "@/assets/img/red/main_gear.svg";
import japanMain from "@/assets/img/red/japan_main.svg";
import footerLine from "@/assets/img/red/footer_line.svg";
import registerButton from "@/assets/img/red/register_button.svg";

type FormFields = "username" | "email" | "password";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState<Record<FormFields, string>>({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "username" || name === "email" || name === "password") {
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
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Registration failed");
                return;
            }

            navigate("/login");
        } catch {
            setError("Network error");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <HomeHeader/>
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
                    <div className={styles.contentBackgroundCover}>
                        <div className={styles.registerFormWrapper}>
                            <form className={styles.registerForm} onSubmit={handleSubmit} autoComplete="off">
                                {error && <p style={{color: "red"}}>{error}</p>}

                                <div className={styles.formField}>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        maxLength={20}
                                        value={form.username}
                                        autoComplete="off"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        maxLength={50}
                                        value={form.email}
                                        autoComplete="off"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        maxLength={30}
                                        value={form.password}
                                        autoComplete="new-password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.mainButtonWrapper}>
                                    <div className={cn(styles.buttonWrapper, styles.loginButtonWrapper)}>
                                        <input
                                            className={cn(styles.headerButton, styles.cButton, styles.loginMainB)}
                                            type="image"
                                            src={registerButton}
                                            alt="Register Button"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <div className={styles.footerLine}>
                        <img className={styles.redLine} src={footerLine} alt="Footer Line"/>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default RegisterPage;
