import {BrowserRouter, Routes, Route} from "react-router-dom";

import {GreetingPage} from "./pages/GreetingPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import {DiscoverPage} from "./pages/DiscoverPage.tsx";

const App = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GreetingPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/discover" element={<DiscoverPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
