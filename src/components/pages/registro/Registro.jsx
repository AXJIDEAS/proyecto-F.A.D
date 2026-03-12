import React from "react";
const Login = () => {
    return (
        <div className="login-container">
            <h1>Registro</h1>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Login;