import styles from "../styles/pages/GreetingPage.module.css"
import {Wrapper} from "../components/wrapper/Wrapper.tsx";
import type {JSX} from "react";
import {useNavigate} from "react-router-dom";


export const GreetingPage = (): JSX.Element => {

    const navigate = useNavigate();
    return (
        <Wrapper>
            <div className={styles.mainContent}>
                <div className={styles.greetingText}>
                    <p>
                        In the neon haze of future megacities, digital notes are your cybernetic edge, pulsing with
                        the
                        speed of data streams. Harness the power of your mind with our next-gen note system—crafted
                        for
                        the fast-paced, tech-driven world. Capture, organize, and access your thoughts anytime,
                        anywhere.
                    </p>
                </div>
            </div>
            <div className={styles.interaction}>
                <button className={styles.connectButton} onClick={() => navigate("/main")}>
                    CONNECT
                </button>
            </div>
        </Wrapper>
    );
};
