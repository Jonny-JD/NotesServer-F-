import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

import Home from "./pages/MainPage.tsx";
import Register from "./pages/RegisterPage.tsx";
import Login from "./pages/LoginPage.tsx";
import Note from "./pages/Note.tsx";
import NoteCreate from "./pages/NoteCreate.tsx";
import Search from "./pages/Search.tsx";
import Discover from "./pages/DiscoverPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import NotFound from "./pages/NotFoundPage.tsx";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/note/discover" element={<Discover />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/note/create" element={<NoteCreate />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/note" element={<Note />} />
                        <Route path="/note/search" element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
