import {type JSX, useEffect, useRef, useState} from "react";
import type {MenuOption} from "../types.ts";


export const Dropdown = (props: { menuOptions: MenuOption[] }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isLoggedIn = true; //TODO auth

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    const visibleOptions = props.menuOptions.filter(menuOption => !menuOption.requiresLogin || isLoggedIn);

    return (
        <div className={"dropdown"} ref={dropdownRef}>
            <button className={"dropdown-button"} onClick={toggle}></button>
            {isOpen &&
                <div className={"dropdown-options"}>
                    {visibleOptions.map((option) => (

                            <button key={option.label} type={"button"}
                                    className={option.label.toLowerCase() === "logout"
                                        ? "dropdown-option red-button"
                                        : "dropdown-option" }
                                    onClick={(e) => {
                                option.onClick(e);
                                setIsOpen(false);
                            }} id={option.label}>{option.label}</button>
                        )
                    )}
                </div>}
        </div>
    )
}