import {BrowserRouter, Routes, Route} from "react-router-dom";

import {GreetingPage} from "./pages/GreetingPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";


const App = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GreetingPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
