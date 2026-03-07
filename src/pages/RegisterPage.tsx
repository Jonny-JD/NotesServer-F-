import React, {type JSX, useState} from "react";
import styles from "../styles/pages/RegisterPage.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const RegisterPage = (): JSX.Element => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const baseUrl = import.meta.env.API_BASE_URL;
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        try {
            await axios.post(baseUrl, {username, email, password});
            navigate("/login");
        }
        catch (error) {
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
                <button type={"submit"}>
                    REGISTER
                </button>
            </form>
        </div>
    );
}