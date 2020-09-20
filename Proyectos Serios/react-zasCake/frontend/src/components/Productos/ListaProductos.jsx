import React, { Fragment, useState, useEffect } from "react";
import Producto from "./Producto";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
const ListaProductos = () => {
  const TituloCategoria = styled.h1`
    font-family: "Times New Roman", Times, serif;
  `;

  let productos = [];

  productos = useSelector((state) => state.productosReducer.productos);
  const loading = useSelector((state) => state.productosReducer.loading);
  const categoria_seleccionada = useSelector(
    (state) => state.productosReducer.categoria_seleccionada
  );
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="col-12">
        <TituloCategoria>{categoria_seleccionada}</TituloCategoria>
      </div>
      <div className="row align-items-center text-center">
        {loading ? <p className="col-12">Cargando...</p> : null}
        {productos.map((producto) => (
          <Producto producto={producto} key={producto._id}></Producto>
        ))}
      </div>
    </Fragment>
  );
};

export default ListaProductos;
