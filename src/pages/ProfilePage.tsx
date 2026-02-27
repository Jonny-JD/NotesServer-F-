import {type JSX, useState} from "react";
import styles from "../styles/pages/ProfilePage.module.css";


export const ProfilePage = (): JSX.Element => {

    //TODO password and form submit
    const [formType, setFormType] = useState<'user_info' | 'password'>('user_info');

    const username: string = "Jimmy_test";
    const email: string = "test@mail.com"

    return (
        <div className={styles.mainContent}>
            {formType === 'user_info' &&
                <form className={styles.profileForm}>
                    <div className={`options-form-cell ${styles.profileFormCell}`}>
                        <div className={styles.profileFormLabel}>USERNAME:</div>
                        <span id={"username"}>{username}</span>
                    </div>
                    <div className={`options-form-cell ${styles.profileFormCell}`}>
                        <label className={styles.profileFormLabel} htmlFor={"email"}>EMAIL: </label>
                        <input className={"options-form-input"} type={"email"} id={"email"} autoComplete={"email"}
                               placeholder={email}/>
                    </div>
                    <div className={`options-form-cell ${styles.profileFormCell}`}>
                        <label className={styles.profileFormLabel} htmlFor={"set-password"}>PASSWORD: </label>
                        <button className={styles.passwordChangeButton} id={"set-password"}
                                onClick={() => setFormType('password')}>CHANGE PASSWORD
                        </button>
                    </div>
                    <button type={"submit"}>
                        UPDATE EMAIL
                    </button>
                </form>}
            {formType === 'password' && <form>
                <div className={`form-cell ${styles.passwordFormCell}`}>
                    <label htmlFor={"current-password"}>CURRENT PASSWORD: </label>
                    <input type={"password"} id={"current-password"} placeholder={"your current password"}/>
                </div>
                <div className={`form-cell ${styles.passwordFormCell}`}>
                    <label htmlFor={"new-password"}>NEW PASSWORD: </label>
                    <input type={"password"} id={"new-password"} placeholder={"your new password"}/>
                </div>
                <div className={`form-cell ${styles.passwordFormCell}`}>
                    <label htmlFor={"new-password-confirm"}>CONFIRM PASSWORD: </label>
                    <input type={"password"} id={"new-password-confirm"} placeholder={"your new password again"}/>
                </div>
                <button type={"submit"}>
                    CHANGE PASSWORD
                </button>
            </form>}
        </div>
    );
}