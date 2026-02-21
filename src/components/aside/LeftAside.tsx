import type {JSX} from "react";


export const LeftAside = (): JSX.Element => {
    return (
        <aside>
            <div className={"aside-interaction-buttons"}>
                <button>
                    DISCOVER
                </button>
                <button>
                    MY NOTES
                </button>
                <button>
                    CREATE
                </button>
                <button>
                    PROFILE
                </button>
            </div>
            <button className={"red-button"}>
                LOGOUT
            </button>
        </aside>
    )
}