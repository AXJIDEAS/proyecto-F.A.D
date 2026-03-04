import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Proyecto FAD</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Acerca de nosotros</a></li>
                <li><a href="/manual">Manual de roles</a></li>
            </ul>
            <ul className="navbar-btns">
                <li className="registro-btn"><a href="/Registro">Registrarse</a></li>
                <li className="login-btn"><a href="/login">Iniciar sesión</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;