import React, { Fragment } from "react";
import ListaProductos from "../components/Productos/ListaProductos";
import Sidebar from "../components/tienda/Sidebar";
const Tienda = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col">
          <ListaProductos></ListaProductos>
        </div>
      </div>
    </Fragment>
  );
};

export default Tienda;
