import React, { Fragment, useState } from "react";
import Producto from "./components/Producto";
import Footer from "./components/footer";
import Header from "./components/header";
import Carrito from "./components/Carrito";
function App() {
  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa Vue", precio: 40 },
    { id: 3, nombre: "Camisa Angular", precio: 30 },
    { id: 4, nombre: "Camisa Node", precio: 20 },
  ]);

  // State para carrito de compras

  const [carrito, agregarProducto] = useState([]);
  // Obtener la fecha

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual"></Header>
      <h2>Lista de productos</h2>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        ></Producto>
      ))}
      <p>Esta es mi primera pagina web con REACT.js</p>
      <Carrito carrito={carrito} agregarProducto={agregarProducto}></Carrito>
      <Footer fecha={fecha}></Footer>
    </Fragment>
  );
}

export default App;
