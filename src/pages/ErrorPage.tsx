import type {JSX} from "react";
import {useRouteError} from "react-router-dom";
import {Wrapper} from "../components/wrapper/Wrapper.tsx";
import {useMenuOptions} from "../hook/useMenuOptions.ts";
import styles from "../styles/pages/ErrorPage.module.css"
import {LeftAside} from "../components/aside/LeftAside.tsx";

function isRouteError(error: unknown): error is { statusText?: string; message?: string } {
    return typeof error === "object" && error !== null && ("statusText" in error || "message" in error);
}

export const ErrorPage = (): JSX.Element => {
    const error = useRouteError();
    console.error(error);
    const menuOptions = useMenuOptions();

    const errorMessage = isRouteError(error)
        ? error.statusText || error.message
        : "Unknown error";

    return (
        <Wrapper menuOptions={menuOptions} aside={<LeftAside menuOptions={menuOptions}/>}>
            <div id="errorPage" className={styles.errorWrapper}>
                <h2>Oops!</h2>
                <p>Something went wrong.</p>
                <i>{errorMessage}</i>
            </div>
        </Wrapper>
    );
};