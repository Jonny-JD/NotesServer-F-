import * as React from "react";
import type {DeviceTypes} from "../types.ts";


import footerLineDesktop from "../../assets/desktop/svg/elements/footer_line.svg";
import footerLineTablet from "../../assets/tablet/svg/elements/footer_line.svg";
import footerLineMobile from "../../assets/mobile/svg/elements/footer_line.svg";

export const Footer: React.FC<DeviceTypes> = () => {
    return (
        <footer className="footer">
            <picture>
                <source media="(min-width: 740px)" srcSet={footerLineDesktop} />
                <source media="(min-width: 480px)" srcSet={footerLineTablet} />
                <img className="footer-line" src={footerLineMobile} alt="footer-line" />
            </picture>
        </footer>
    )
}