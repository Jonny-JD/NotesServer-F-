import * as React from "react";


function Com({children}: {children: React.ReactNode}) {
    return children;
}

const MainPage: React.FC = () => {
    return(
        <Com>
            <div>Hello Jonny!</div>
        </Com>
)
};

export default MainPage;
