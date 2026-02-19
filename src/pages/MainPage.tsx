import styles from "../styles/pages/MainPage.module.css"
import {Wrapper} from "../components/wrapper/Wrapper.tsx";
import type {JSX} from "react";
import {useNavigate} from "react-router-dom";


export const MainPage = (): JSX.Element => {

    const navigate = useNavigate();
    return (
        <Wrapper>
            <div className={styles.interaction}>
                <button onClick={() => navigate("/login")}>LOG IN</button>
                <button onClick={() => navigate("/register")}>SIGN UP</button>
                <button onClick={() => navigate("/discover")}>DISCOVER</button>
            </div>
        </Wrapper>
    );
};
