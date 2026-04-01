import {type JSX, useState} from "react";
import styles from "../styles/pages/LoginPage.module.css"
import {useAuth} from "../hook/useAuth.ts";
import {useNavigate} from "react-router-dom";
import React from "react";


export const LoginPage = (): JSX.Element => {
    //TODO should be logout when started

    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/discover")

        } catch (error) {
            console.log(error);
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
                <button type={"submit"}>
                    LOGIN
                </button>
            </form>
        </div>
    );
}