import * as React from "react";
import type {DeviceTypes} from "../types.ts";
import headerLineMobile from "../../assets/mobile/svg/elements/header_line.svg";
import headerLineTablet from "../../assets/tablet/svg/elements/header_line.svg";
import headerLineDesktop from "../../assets/desktop/svg/elements/header_line.svg";
import logoMobile from  "../../assets/mobile/svg/logo/logo.svg";
import logoTablet from  "../../assets/tablet/svg/logo/logo.svg";
import logoDesktop from "../../assets/desktop/svg/logo/logo.svg";

export const Header: React.FC<DeviceTypes> = ({device}) => {

    const logos: Record<DeviceTypes['device'], string> = {
        mobile: logoMobile,
        tablet: logoTablet,
        desktop: logoDesktop,
    };

    const headerLines: Record<DeviceTypes['device'], string> = {
        mobile: headerLineMobile,
        tablet: headerLineTablet,
        desktop: headerLineDesktop,
    };


    return (

        <header className="header">
            <img className="logo" src={logos[device]} alt='logo'/>
            <img className="header-line" src={headerLines[device]} alt='header-line'/>

        </header>
    )
}