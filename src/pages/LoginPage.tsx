import type {JSX} from "react";
import styles from "../styles/pages/LoginPage.module.css"


export const LoginPage = (): JSX.Element => {
    return (
        <div className={styles.mainContent}>
            <form>
                <div className={"form-cell"}>
                    <label htmlFor={"username"}>USERNAME</label>
                    <input type={"text"} id={"username"} autoComplete={"username"}/>
                </div>
                <div className={"form-cell"}>
                    <label htmlFor={"password"}>PASSWORD</label>
                    <input type={"password"} id={"password"}/>
                </div>
                <button type={"submit"}>
                    LOGIN
                </button>
            </form>
        </div>
    );
}