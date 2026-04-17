import footerLineDesktop from "../../assets/desktop/svg/elements/footer_line.svg";
import footerLineTablet from "../../assets/tablet/svg/elements/footer_line.svg";
import footerLineMobile from "../../assets/mobile/svg/elements/footer_line.svg";
import {type JSX, useEffect, useState} from "react";
import {Dropdown} from "./Dropdown.tsx";
import type {MenuOption} from "../types.ts";

export const Footer = (props: { menuOptions: MenuOption[] }): JSX.Element => {


    const [showAside, setShowAside] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const onResize = () => setShowAside(window.innerWidth <= 1024);
        window.addEventListener("resize", onResize);
        return (() => window.removeEventListener("resize", onResize));
    }, [])


    return (
        <footer className="footer">
            <picture>
                <source media="(min-width: 740px)" srcSet={footerLineDesktop}/>
                <source media="(min-width: 480px)" srcSet={footerLineTablet}/>
                <img className="footer-line" src={footerLineMobile} alt="footer-line"/>
            </picture>
            {showAside && <Dropdown menuOptions={props.menuOptions}/>}
        </footer>
    )
}