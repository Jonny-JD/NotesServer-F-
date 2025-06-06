import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import cn from "classnames";
import styles from "../styles/page/register_page.module.less";
import registerButton from "@/assets/img/red/svg/register_button.svg";
import RedStyle from "../components/RedStyle.tsx";
import ErrorMessage from "../components/message/ErrorMessage.tsx";

const currentPage = 3;
const totalPages = 8;

type FormFields = "username" | "email" | "rawPassword";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState<Record<FormFields, string>>({
        username: "",
        email: "",
        rawPassword: "",
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(null);
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "username" || name === "email" || name === "rawPassword") {
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

                const errorMessage =
                    data?.errors?.user ??
                    data?.message ??
                    data?.error ??
                    "Registration failed";

                setError(errorMessage);
                return;
            }

            navigate("/login");
        } catch {
            setError("Network error");
        }
    };

    return (
        <RedStyle currentPage={currentPage} totalPages={totalPages}>
                <div className={styles.contentBackgroundCover}>
                    <div className={styles.registerFormWrapper}>
                        {error && <ErrorMessage message={error} />}
                        <form className={styles.registerForm} onSubmit={handleSubmit} autoComplete="off">
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
                                <label htmlFor="rawPassword">Password:</label>
                                <input
                                    type="password"
                                    name="rawPassword"
                                    id="rawPassword"
                                    maxLength={30}
                                    value={form.rawPassword}
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.mainButtonWrapper}>
                                <div className={styles.buttonWrapper}>
                                    <input
                                        className={cn(styles.headerButton, styles.cButton, styles.registerMainB)}
                                        type="image"
                                        src={registerButton}
                                        alt="Register Button"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </RedStyle>
    );
};

export default RegisterPage;
