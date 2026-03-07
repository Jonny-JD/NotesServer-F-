import {type JSX, useState} from "react";
import styles from "../styles/pages/LoginPage.module.css"
import {useAuth} from "../hook/useAuth.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";


export const LoginPage = (): JSX.Element => {

    const baseUrl: string = import.meta.env.API_BASE_URL;
    const {setTokenState} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        try {
            const response = await axios.post(baseUrl, {username, password});
            setTokenState(response.data.token);
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