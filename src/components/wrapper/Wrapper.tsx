import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import "../../styles/style.css";
import {type JSX, useEffect, useState} from "react";
import {Main} from "../main/Main.tsx";
import type {MenuOption} from "../types.ts";
import useRestrictToExtendedLatinWithTooltip from "../../hook/useRestrictToExtendedLatinWithTooltip.ts";
import useTabInTextarea from "../../hook/useTabInTextarea.ts";


type Props = {
    children: JSX.Element;
    aside?: JSX.Element[];
    menuOptions: MenuOption[];
}

export const Wrapper = (props: Props) => {
    const [showPanel, setShowPanel] = useState(window.innerWidth > 1024);
    useRestrictToExtendedLatinWithTooltip();
    useTabInTextarea();

    useEffect(() => {
        const onResize = () => setShowPanel(window.innerWidth > 1024);
        window.addEventListener("resize", onResize);
        return (() => window.removeEventListener("resize", onResize));
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content-wrapper">
                {showPanel && props.aside?.[0]}
                <Main>{props.children}</Main>
                {showPanel && props.aside?.[1]}
            </div>
            <Footer menuOptions={props.menuOptions}/>
        </div>
    );
};