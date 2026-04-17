import React, {type JSX, useState} from "react";
import styles from "../styles/pages/RegisterPage.module.css";
import {useNavigate} from "react-router-dom";
import api from "../api/axios.ts";
import {useMessage} from "../hook/useMessage.ts";
import {ErrorMessage} from "../components/message/ErrorMessage.tsx";


export const RegisterPage = (): JSX.Element => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {error, setError} = useMessage();

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        setError(null);

        await api.post("users", {username, email, rawPassword: password})
            .then(_ => {
                if (_.status == 201) {
                    navigate("/login");
                }
            })
            .catch(e => {
                const data = e.response?.data;
                setError(
                    data?.errors?.user ??
                    data?.message ??
                    data?.error ??
                    "Failed to login"
                );
            });
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
                        autoComplete={"username"}
                    />
                </div>
                <div className={"form-cell"}>
                    <label htmlFor={"email"}>EMAIL</label>
                    <input
                        type={"email"}
                        id={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete={"email"}/>
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
                    REGISTER
                </button>
            </form>
        </div>
    );
}