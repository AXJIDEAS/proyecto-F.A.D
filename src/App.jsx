import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx"
import Login from "./components/pages/login/Login.jsx";
import Manual from "./components/pages/manual/Manual.jsx";
import Inicio from "./components/pages/home/inicio.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/manual" element={<Manual />} />
            </Routes>
        </BrowserRouter>
    );
}   

export default App;