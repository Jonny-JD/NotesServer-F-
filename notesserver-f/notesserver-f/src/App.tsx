import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Note from "./pages/Note";
import NoteCreate from "./pages/NoteCreate";
import Search from "./pages/Search";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/note" element={<Note />} />
                <Route path="/note/create" element={<NoteCreate />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
