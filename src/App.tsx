import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider.tsx";

import Home from "./pages/MainPage.tsx";
import Register from "./pages/RegisterPage.tsx";
import Login from "./pages/LoginPage.tsx";
import Note from "./pages/Note.tsx";
import NoteCreate from "./pages/NoteCreatePage.tsx";
import Search from "./pages/Search.tsx";
import Discover from "./pages/DiscoverPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
import useRestrictToExtendedLatin from "./hook/useRestrictToExtendedLatin.tsx";
import useTabInTextarea from "./hook/useTabInTextarea.tsx";
import UserNotesPage from "./pages/UserNotesPage.tsx";
import GlobalLoader from "./components/GlobalLoader.tsx";

const App = () => {
    useRestrictToExtendedLatin();
    useTabInTextarea();
    return (
        <>
            <GlobalLoader />
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/registration" element={<Register/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="/notes/discover" element={<Discover/>}/>
                            <Route path="/notes/create" element={<NoteCreate/>}/>
                            <Route path="/notes" element={<Note/>}/>
                            <Route path="/notes/:id" element={<Note/>}/>
                            <Route path="/notes/search" element={<Search/>}/>
                            <Route path="/notes/my" element={<UserNotesPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
};

export default App;
