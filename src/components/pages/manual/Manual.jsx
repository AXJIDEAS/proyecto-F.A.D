import React from "react";
import "./Manual.css";

const manual = () => {
    return (
        <main className="Manual">
            <h1>Manual de roles</h1>
            <p>En esta sección se describen los diferentes roles que existen en el sistema y sus respectivas funciones.</p>

            <div className="roles-container">
                <aside className="roles-box">
        <section className="Administrador">
                <h2>Administrador</h2>
                <p>El administrador tiene acceso a todas las funcionalidades del sistema, incluyendo la gestión de usuarios, la configuración del sistema y la supervisión de las actividades.</p>
            </section>
            </aside>

            <aside className="roles-box">
            <section className="Usuario">
                <h2>Usuario</h2>
                <p>El usuario tiene acceso a las funcionalidades básicas del sistema, como la visualización de información y la realización de tareas específicas asignadas por el administrador.</p>
            </section></aside>

            <aside className="roles-box">
            <section className="Consultor">
                <h2>Consultor</h2>
                <p>El consultor tiene acceso a funcionalidades específicas para realizar consultas y análisis, pero no puede realizar cambios en el sistema.</p>
            </section></aside>

            <aside className="roles-box">
            <section className="Invitado">
                <h2>Invitado</h2>
                <p>El invitado tiene acceso limitado al sistema, solo puede visualizar información pública y no tiene permisos para realizar ninguna acción.</p>
            </section></aside>
        </div>
        </main>
    );
}

export default manual;