import headerLineDesktop from "../../assets/desktop/svg/elements/header_line.svg";
import headerLineTablet from "../../assets/tablet/svg/elements/header_line.svg";
import headerLineMobile from "../../assets/mobile/svg/elements/header_line.svg";
import logo from "../../assets/logo.svg";
import type {ReactNode} from "react";

export const Header = (): ReactNode => {

    return (

        <header className="header">
            <picture>
                <img className="logo" src={logo} alt="logo"/>
            </picture>

            <picture>
                <source media="(min-width: 740px)" srcSet={headerLineDesktop}/>
                <source media="(min-width: 480px)" srcSet={headerLineTablet}/>
                <img className="header-line" src={headerLineMobile} alt="header-line"/>
            </picture>
        </header>
    )
}