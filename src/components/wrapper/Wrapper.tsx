import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import "../../styles/style.css";
import type {ReactNode} from "react";

export const Wrapper= ({children}: {children: ReactNode}) => (
    (
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
);