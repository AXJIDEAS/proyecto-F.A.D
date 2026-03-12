import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/resources/database-logo.svg" alt="Logo" className="navbar-logo-img" />
                <a href="/"><h1>Proyecto FAD</h1></a>
            </div>

            <ul className="navbar-links">
                <li><a href="/">Acerca de nosotros</a></li>
                <li><a href="/manual">Manual de roles</a></li>
            </ul>
            <div className="navbar-btns">
                <a href="/Registro" className="registro-btn">Registrarse</a>
                <a href="/login" className="login-btn">Iniciar sesión</a>
            </div>
        </nav>
    );
}

export default Navbar;