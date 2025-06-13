import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.tsx";
import cn from "classnames";
import styles from "../styles/page/login_page.module.less";
import loginButton from "@/assets/img/red/svg/login_button.svg";
import RedStyle from "../components/RedStyle.tsx";
import ErrorMessage from "../components/message/ErrorMessage.tsx";
import Loader from "../components/Loader.tsx";

const currentPage = 2;
const totalPages = 8;

type FormFields = "username" | "password";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const {setUser} = useAuth();
    const [loading, setLoading] = useState(true);


    const [form, setForm] = useState<Record<FormFields, string>>({
        username: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(null);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
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
            const response = await fetch(`${import.meta.env.VITE_API_BASE}/auth/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
                credentials: "include"
            });

            if (!response.ok) {
                const data = await response.json();

                const errorMessage =
                    data?.errors?.validation ??
                    data?.message ??
                    data?.error ??
                    "Login failed";

                setError(errorMessage);
                return;
            }

            const userFromBackend = await response.json();
            setUser(userFromBackend);
            navigate("/notes/discover");
        } catch {
            setError("Network error");
        }
    };


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);


    if (loading) {
        return <Loader/>;
    }

    return (
        <RedStyle currentPage={currentPage} totalPages={totalPages}>
            <div className={styles.contentBackgroundCover}>
                <div className={styles.loginFormWrapper}>
                    {error && <ErrorMessage message={error}/>}
                    <form
                        className={styles.loginForm}
                        onSubmit={handleSubmit}
                        autoComplete="off"
                    >
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
