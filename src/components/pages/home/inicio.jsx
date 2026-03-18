import React from "react";
import "./Inicio.css";

const Inicio = () => {

    const productos = [
        { id: 1, nombre: "Producto A", precio: 10.99,imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtM_p47moTJpUTekYJpK9PNmxmEu3zs6BtBw&s" },
        { id: 2, nombre: "Producto B", precio: 19.99, imagen: "https://searchvectorlogo.com/wp-content/uploads/2019/08/international-management-group-img-logo-vector.png" },
        { id: 3, nombre: "Producto C", precio: 5.99, imagen: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww" },
        { id: 4, nombre: "Producto D", precio: 15.99, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVix9La73CKBZ3PxDMds2_a9sFNaM3WM5-Q&s" },
    ];
    return (
      
        <main className="Inicio">
            <div className="inicio-container">
                <h1 className="inicio-title">Productos Destacados</h1>
                <p className="inicio-description">Descubre nuestros productos más populares y aprovecha las mejores ofertas.</p>

                <h2>Nuestros Productos</h2>

                <div className="productos-grid">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                            <h3>{producto.nombre}</h3>
                            <p className="producto-precio">${producto.precio.toFixed(2)}</p>
                            <button className="producto-button">Agregar</button>
                        </div>
                    ))}
                </div>

                <h2>explicando de a poco el proyecto</h2>
                <p className="inicio-description">El proyecto tiene como objetivo principal facilitar la gestión de pequeñas empresas...</p>
            </div>  
        </main>
    );
}

export default Inicio;