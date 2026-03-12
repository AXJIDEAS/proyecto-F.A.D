import React from "react";
import "./Inicio.css";

const Inicio = () => {
    return (

        <main className="Inicio">
        <div className="inicio-container">
            <h1 className="inicio-title">Bienvenido a la página de inicio</h1>
            
            <p className="inicio-description">Este es un proyecto diseñado para aquellos administradores de empresas pequeñas. Hecho con el acriño que lo amerita y la creatividad de dos jovenes estudiantes...</p>
            <h2>Explicando de a poco el proyecto</h2>
            <p className="inicio-description">El proyecto tiene como objetivo principal facilitar la gestión de pequeñas empresas, proporcionando una solución integral que combine funcionalidad y facilidad de uso. todo parte de una idea llena de curiosidad y un deseo de conocer el como funcionan las pequeñas empresas y qué podemos hacer</p>
        </div>
        </main>
    );
}

export default Inicio;