
import footerLineDesktop from "../../assets/desktop/svg/elements/footer_line.svg";
import footerLineTablet from "../../assets/tablet/svg/elements/footer_line.svg";
import footerLineMobile from "../../assets/mobile/svg/elements/footer_line.svg";
import type {ReactNode} from "react";

export const Footer = (): ReactNode => {
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