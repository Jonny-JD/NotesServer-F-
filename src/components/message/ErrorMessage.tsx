import React from "react";
import styles from "../../styles/shared/message/error_message.module.less"

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div className={styles.errorMessage}>
            {message}
        </div>
    );
};

export default ErrorMessage;
