import React from "react";
import cn from "classnames";
import styles from "../styles/page/main_page.module.less";
import RedStyle from "../components/RedStyle.tsx";
import mainSignUpButton from "@/assets/img/red/svg/main_sign_up_button.svg";
import {useNavigate} from "react-router-dom";


const currentPage = 1;
const totalPages = 8;

const MainPage: React.FC = () => {
    const navigate = useNavigate();


    const goToRegistration = () => {
        navigate("/registration");
    };


    return (
        <RedStyle currentPage={currentPage} totalPages={totalPages}>
            <div className={styles.contentBackgroundCover}>
                <div className={styles.mainText}>
                    <p>
                        In the neon haze of future megacities, digital notes are your
                        cybernetic edge, pulsing with the speed of data streams.
                        Harness the power of your mind with our next-gen note
                        system—crafted for the fast-paced, tech-driven world. Capture,
                        organize, and access your thoughts anytime, anywhere.
                    </p>
                </div>
            </div>

            <div className={styles.mainButtonWrapper}>
                <div className={cn(styles.buttonWrapper, styles.loginButtonWrapper)}>
                    <input
                        type="image"
                        className={cn(styles.headerButton, styles.cButton, styles.signUpMainB)}
                        src={mainSignUpButton}
                        alt="Main Sign Up Button"
                        onClick={goToRegistration}
                    />
                </div>
            </div>
        </RedStyle>
    );
};

export default MainPage;
