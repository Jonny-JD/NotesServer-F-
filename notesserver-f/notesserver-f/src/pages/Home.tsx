import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">
                    <div className="page-counter">
                        <span>1/5</span>
                        <span className="page-page">PAGE</span>
                    </div>
                    <div className="header-left">
                        <div className="logo-container">
                            <img className="logo" src="/img/red/logo.svg" alt="Logo" />
                            <div className="logo-text-wrapper">
                                <img className="logo-text" src="/img/red/logo_text.svg" alt="Logo Text" />
                                <img className="officers-text" src="/img/red/officers_text.svg" alt="Officers Text" />
                            </div>
                            <div className="button-wrapper discover">
                                <input
                                    type="image"
                                    className="header-button c-button"
                                    src="/img/red/discover_button.svg"
                                    alt="Discover Button"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="menu-container">
                            <div className="menu-buttons">
                                <div className="button-wrapper">
                                    <input
                                        type="image"
                                        className="header-button c-button"
                                        src="/img/red/sign_up_button.svg"
                                        alt="Sign Up Button"
                                    />
                                </div>
                                <div className="button-wrapper">
                                    <input
                                        type="image"
                                        className="header-button c-button"
                                        src="/img/red/login_button.svg"
                                        alt="Login Button"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="red-bar">
                            <img className="bar" src="/img/red/header_bar.svg" alt="Header Bar" />
                        </div>
                    </div>
                    <div className="red-line">
                        <img className="line" src="/img/red/top_line.svg" alt="Top Line" />
                    </div>
                </header>
                <main className="main">
                    <div className="main-header-container">
                        <div className="main-gear-container">
                            <img className="gear-image" src="/img/red/main_gear.svg" alt="Main Gear" />
                            <img className="header-japan" src="/img/red/japan_main.svg" alt="Japan Main" />
                        </div>
                        <div className="header-text">
                            <span>DIGITAL NOTES</span>
                        </div>
                    </div>
                    <div className="content-background-cover">
                        <div className="main-text">
                            <p>
                                In the neon haze of future megacities, digital notes are your cybernetic edge, pulsing
                                with the speed of data streams. Harness the power of your mind with our next-gen note
                                system—crafted for the fast-paced, tech-driven world. Capture, organize, and access your
                                thoughts anytime, anywhere.
                            </p>
                        </div>
                    </div>
                    <div className="main-sec-button c-button button-wrapper">
                        <div className="button-wrapper">
                            <input
                                type="image"
                                className="main-button"
                                src="/img/red/main_sign_up_button.svg"
                                alt="Main Sign Up Button"
                            />
                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer-line">
                        <img className="red-line" src="/img/red/footer_line.svg" alt="Footer Line" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
