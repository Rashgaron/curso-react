import React from "react";
import styled from "@emotion/styled";

const TextArticulo = styled.p`
  font-family: "Times-New-Roman";
`;
const Producto = ({ producto }) => {
  const { nombre, url_imagen_principal, descripcion_html } = producto;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="col producto">
        <img src={url_imagen_principal} alt={nombre} width="100%"></img>
      </div>
      <div className="col-auto text-center">
        <TextArticulo>{nombre}</TextArticulo>
      </div>
    </div>
  );
};

export default Producto;
