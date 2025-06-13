import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";

const GlobalLoader: React.FC = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const start = performance.now();

        const handleLoad = () => {
            const elapsed = performance.now() - start;
            const remaining = 1000 - elapsed;
            setTimeout(() => setVisible(false), Math.max(0, remaining));
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!visible) return null;

    return ReactDOM.createPortal(
        <div style={{
            position: "fixed",
            zIndex: 9999,
            inset: 0,
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Loader />
        </div>,
        document.body
    );
};

export default GlobalLoader;
