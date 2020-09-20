import React, { Fragment } from "react";
import ListaProductos from "../components/Productos/ListaProductos";
const Tienda = () => {
  return (
    <Fragment>
      <div className="row">
        <h1>Desde la tienda</h1>
      </div>
      <div className='row'>
          <ListaProductos></ListaProductos>
      </div>
    </Fragment>
  );
};

export default Tienda;
