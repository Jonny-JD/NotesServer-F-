import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import "../../styles/style.css";
import {type ReactNode, useEffect, useState} from "react";
import {Main} from "../main/Main.tsx";
import {LeftAside} from "../aside/LeftAside.tsx";

export const Wrapper = ({children}: { children: ReactNode }) => {
    const [showPanel, setShowPanel] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const onResize = () => setShowPanel(window.innerWidth > 1024);
        window.addEventListener("resize", onResize);
        return (() => window.removeEventListener("resize", onResize));
    },[]);

    return (

        <div className="wrapper">
            <Header/>
            <div className="content-wrapper">
                {showPanel && <LeftAside/>}
                <Main>{children}</Main>
            </div>
            <Footer/>
        </div>
    );
};