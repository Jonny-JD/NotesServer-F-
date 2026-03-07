import {type MouseEvent} from "react";

export interface DeviceTypes {
    device: 'mobile' | 'tablet' | 'desktop';
}

export interface MenuOption {
    label: string,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>,
    requiresLogin: boolean
}


export interface User {
    id: string,
    username: string,
    email: string,
}