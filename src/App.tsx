import {BrowserRouter, Routes, Route} from "react-router-dom";

import {GreetingPage} from "./pages/GreetingPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import {DiscoverPage} from "./pages/DiscoverPage.tsx";
import {CreatePage} from "./pages/CreatePage.tsx";
import {EditNotePage} from "./pages/EditNotePage.tsx";
import {NotePage} from "./pages/NotePage.tsx";
import {SimpleLayout} from "./components/SimpleLayout.tsx";
import {MainLayout} from "./components/MainLayout.tsx";
import {MyNotesPage} from "./pages/MyNotesPage.tsx";
import {ProfilePage} from "./pages/ProfilePage.tsx";

const App = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route element={<SimpleLayout/>}>
                    <Route path="/" element={<GreetingPage/>}/>
                    <Route path="/main" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Route>
                <Route element={<MainLayout/>}>
                    <Route path="/discover" element={<DiscoverPage/>}/>
                    <Route path="/my" element={<MyNotesPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/edit" element={<EditNotePage/>}/>
                    <Route path="/note" element={<NotePage/>}/>
                </Route>

            </Routes>
        </BrowserRouter>

    )
        ;
};

export default App;
