import React, {type JSX, useState} from "react";
import styles from "../styles/pages/ProfilePage.module.css";
import {useAuth} from "../hook/useAuth.ts";
import api from "../api/axios.ts";
import type {User} from "../components/types.ts";


export const ProfilePage = (): JSX.Element => {
    const {user, setCurrentUser, logout} = useAuth();
    const [newEmail, setNewEmail] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formType, setFormType] = useState<'user_info' | 'password'>('user_info');

    const username: string | undefined = user?.username;
    const email: string | undefined = user?.email;


    const handleSubmitEmail = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        try {
            const response = await api.put<User>("/users", {
                id: user?.id,
                email: newEmail
            });
            setCurrentUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmitPassword = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            console.log("password doesnt match");
            return;
        }

        try {
            await api.put("/users", {
                id: user?.id,
                currentPassword,
                newPassword
            });
            logout();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.mainContent}>
            {formType === 'user_info' &&
                <form className={styles.profileForm} onSubmit={handleSubmitEmail}>
                    <div className={`options-form-cell ${styles.profileFormCell}`}>
                        <div className={styles.profileFormLabel}>USERNAME:</div>
                        <span id={"username"}>{username}</span>
                    </div>
                    <div className={`options-form-cell ${styles.profileFormCell}`}>
                        <label className={styles.profileFormLabel} htmlFor={"email"}>EMAIL: </label>
                        <input
                            className={"options-form-input"}
                            type={"email"}
                            id={"email"}
                            autoComplete={"email"}
                            placeholder={email}
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
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
            {formType === 'password' && <form onSubmit={handleSubmitPassword}>
                <div className={`form-cell ${styles.passwordFormCell}`}>
                    <label htmlFor={"current-password"}>CURRENT PASSWORD: </label>
                    <input
                        type={"password"}
                        id={"current-password"}
                        placeholder={"your current password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className={`form-cell ${styles.passwordFormCell}`}>
                    <label htmlFor={"new-password"}>NEW PASSWORD: </label>
                    <input
                        type={"password"}
                        id={"new-password"}
                        placeholder={"your new password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className={`form-cell ${styles.passwordFormCell}`}>
                    <label htmlFor={"new-password-confirm"}>CONFIRM PASSWORD: </label>
                    <input
                        type={"password"}
                        id={"new-password-confirm"}
                        placeholder={"your new password again"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type={"submit"}>
                    CHANGE PASSWORD
                </button>
            </form>}
        </div>
    );
}