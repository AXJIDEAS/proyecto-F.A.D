import React from "react";
import "./Registro.css";

const Registro = () => {
    return (
        <div className="registro"> 

        <div className="registro-container">
            <h1>Registro</h1>
            <div className="registro-form">
                
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Registrarse</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default Registro;