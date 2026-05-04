import styles from "../styles/pages/MainPage.module.css"
import type {JSX} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth.ts";


export const MainPage = (): JSX.Element => {

    const {user} = useAuth();


    const navigate = useNavigate();
    return (
        <div className={styles.interaction}>
            {!user && <button data-testid={"sign-in"} onClick={() => navigate("/login")}>SIGN IN</button>}
            {!user && <button data-testid={"sign-up"} onClick={() => navigate("/register")}>SIGN UP</button>}
            <button data-testid={"discover"} onClick={() => navigate("/discover")}>DISCOVER</button>
        </div>
    );
};
