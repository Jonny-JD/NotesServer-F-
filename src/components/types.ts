import {type MouseEvent} from "react";

export interface DeviceTypes {
    device: 'mobile' | 'tablet' | 'desktop';
}

export interface MenuOption {
    label: string,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>,
    requiresLogin: boolean
    requiresLogout?: boolean
}


export interface User {
    id: number,
    username: string,
    email: string,
}

export interface Note {
    id: string;
    title: string;
    tag: string;
    content: string;
    author: NoteAuthorDto;
    isPrivate: boolean;
    createdAt: string;
}

export interface NotePreviewDto {
    id: number;
    title?: string;
    tag?: string;
    author: string;
    createdAt: string;
}

export interface NoteAuthorDto {
    id: number;
    username: string;
}
