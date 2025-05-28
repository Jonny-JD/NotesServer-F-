import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Note from "./pages/Note.tsx";
import NoteCreate from "./pages/NoteCreate.tsx";
import Search from "./pages/Search.tsx";
import Discover from "./pages/Discover.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/note/discover" element={<Discover />} />
                    <Route path="*" element={<NotFound />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/note" element={<Note />} />
                        <Route path="/note/create" element={<NoteCreate />} />
                        <Route path="/note/search" element={<Search />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
