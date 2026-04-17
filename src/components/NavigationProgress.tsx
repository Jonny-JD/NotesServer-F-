import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/style.css"

NProgress.configure({
    showSpinner: false,
    speed: 400,
    minimum: 0.2
});

export const NavigationProgress = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();
        const timer = requestAnimationFrame(() => {
            NProgress.done();
        });

        return () => {
            cancelAnimationFrame(timer);
            NProgress.done();
        };
    }, [location.pathname, location.search]);

    return null;
};