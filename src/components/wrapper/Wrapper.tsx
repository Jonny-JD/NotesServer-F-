import {Header} from "../header/Header.tsx";
import {Main} from "../main/Main.tsx";
import {Footer} from "../footer/Footer.tsx";
import * as React from "react";
import type {DeviceTypes} from "../types.ts";
import "../../styles/style.css";

export const Wrapper: React.FC<DeviceTypes> = ({device}) => (
    (
        <div className="wrapper">
            <Header device={device} />
            <Main device={device} />
            <Footer device={device}/>
        </div>
    )
);