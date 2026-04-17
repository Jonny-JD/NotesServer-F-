import {type JSX, useState} from "react";
import styles from "../styles/pages/LoginPage.module.css"
import {useAuth} from "../hook/useAuth.ts";
import {useNavigate} from "react-router-dom";
import React from "react";
import {useMessage} from "../hook/useMessage.ts";
import {ErrorMessage} from "../components/message/ErrorMessage.tsx";
import axios from "axios";


export const LoginPage = (): JSX.Element => {
    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {error, setError} = useMessage();


    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        setError(null);
        try {
            await login(username, password);
            navigate("/discover")

        } catch (e) {
            if (axios.isAxiosError(e)) {
                const data = e.response?.data;
                setError(
                    data?.errors?.validation ??
                    data?.message ??
                    data?.error ??
                    "Invalid username or password"
                );
            } else {
                setError("Invalid username or password");
            }
        }
    }


    return (
        <div className={styles.mainContent}>
            <form onSubmit={handleSubmit}>
                <div className={"form-cell"}>
                    <label htmlFor={"username"}>USERNAME</label>
                    <input
                        type={"text"}
                        id={"username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete={"username"}/>
                </div>
                <div className={"form-cell"}>
                    <label htmlFor={"password"}>PASSWORD</label>
                    <input
                        type={"password"}
                        id={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <ErrorMessage message={error}/>}
                <button type={"submit"}>
                    LOGIN
                </button>
            </form>
        </div>
    );
}