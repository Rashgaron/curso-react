import React, { Fragment } from "react";
import ListaProductos from "../components/Productos/ListaProductos";
import Sidebar from "../components/tienda/Sidebar";
const Tienda = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-lg-2 text-center text-md-left">
          <Sidebar></Sidebar>
        </div>
        <div className="col p-1">
          <ListaProductos></ListaProductos>
        </div>
      </div>
    </Fragment>
  );
};

export default Tienda;
