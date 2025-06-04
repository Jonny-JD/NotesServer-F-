import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";
import cn from "classnames";
import styles from "../styles/page/login_page.module.less";
import loginButton from "@/assets/img/red/svg/login_button.svg";
import RedStyle from "../components/RedStyle.tsx";

const currentPage = 2;
const totalPages = 8;

type FormFields = "username" | "password";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();

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
                credentials: "include"
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Login failed");
                return;
            }

            const userFromBackend = await response.json();

            setUser(userFromBackend);

            navigate("/notes/discover");
        } catch {
            setError("Network error");
        }
    };

    return (
        <RedStyle currentPage={currentPage} totalPages={totalPages}>
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
                                maxLength={20}
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
                                maxLength={30}
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
        </RedStyle>
    );
};

export default LoginPage;
