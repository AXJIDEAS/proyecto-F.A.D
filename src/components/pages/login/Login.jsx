import React from "react";
import { useState } from "react";
import "./Registro/Registro.css"
import "./Login.css";

const Login = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
            </form>
        <p>¿No tienes cuenta?  
        <span onClick={() => setIsModalOpen(true)} style={{cursor: 'pointer', color: 'green'}}>
        Regístrate aquí
        </span>
        </p>
        
        {isModalOpen && (
            <div className="registro"> 

        <div className="registro-container">
            <h1>Registro</h1>
            <div className="registro-form">
                
                <button className="close-btn" 
                onClick={() => setIsModalOpen(false)}>
              &times;
            </button>

            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button className="go-btn" type="submit">Registrarse</button>
            </form>
            </div>
        </div>
        </div>
        )}
        </div>
    );
        
}

export default Login;