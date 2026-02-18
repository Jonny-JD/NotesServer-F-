import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Wrapper} from "./components/wrapper/Wrapper.tsx";
import type {DeviceTypes} from "./components/types.ts";
import {useEffect, useState} from "react";


const App = () => {

    const [device, setDevice] = useState<DeviceTypes>({device: 'mobile'});

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                setDevice({device: 'mobile'});
            } else if (width < 1024) {
                setDevice({device: 'tablet'});
            } else {
                setDevice({device: 'desktop'});
            }
        }

        window.addEventListener('resize', handleResize);
    }, [device]);

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper device={device.device}/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
