import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Wrapper} from "./components/wrapper/Wrapper.tsx";


const App = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
