import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

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

const App = () => {
    useRestrictToExtendedLatin();
    useTabInTextarea();
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/note/discover" element={<Discover />} />
                        <Route path="/note/create" element={<NoteCreate />} />
                        <Route path="/note" element={<Note />} />
                        <Route path="/note/search" element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
