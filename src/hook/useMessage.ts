import {useEffect, useState} from "react";

export const useMessage = () => {


    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (error || success) {
            const timeout = setTimeout(() => {
                setError(null);
                setSuccess(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [error, success]);


    return { success, setSuccess, error, setError };
}