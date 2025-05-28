import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.tsx";

const Login: React.FC = () => {
    const { setUserId } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Login failed");
                return;
            }

            const data = await response.json();

            // Здесь предполагается, что сервер возвращает { userId: "123", ... }
            setUserId(data.userId);

            // Можно добавить редирект на защищённую страницу
            // Например, с помощью react-router: navigate("/dashboard");
        } catch {
            setError("Network error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </label>

            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>

            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;
