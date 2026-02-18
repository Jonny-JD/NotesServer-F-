import {Header} from "../header/Header.tsx";
import {Main} from "../main/Main.tsx";
import {Footer} from "../footer/Footer.tsx";
import * as React from "react";
import "../../styles/style.css";

export const Wrapper: React.FC = () => (
    (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
);