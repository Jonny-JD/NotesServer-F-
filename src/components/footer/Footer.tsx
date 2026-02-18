import * as React from "react";
import type {DeviceTypes} from "../types.ts";

import footerLineMobile from "../../assets/mobile/svg/elements/footer_line.svg";
import footerLineTablet from "../../assets/tablet/svg/elements/footer_line.svg";
import footerLineDesktop from "../../assets/desktop/svg/elements/footer_line.svg";

export const Footer: React.FC<DeviceTypes> = ({device}) => {

    const footerLines: Record<DeviceTypes['device'], string> = {
        mobile: footerLineMobile,
        tablet: footerLineTablet,
        desktop: footerLineDesktop,
    }

    return (
        <footer className="footer">
            <img className="footer-line" src={footerLines[device]} alt="footer-line"/>
        </footer>
    )
}