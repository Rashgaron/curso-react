import React, { useState, Fragment } from "react";
import shortid from "shortid";
import './Formulario.css'
const Formulario = ({ crearDato }) => {
  // crear state de dato
  const [dato, actualizarDato] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });
  const { nombre, apellido, edad } = dato;

  const actualizarState = (e) => {
    actualizarDato({ ...dato, [e.target.name]: e.target.value });
  };

  //   crear state de error
  const [error, actualizarError] = useState(false);

  const submitDato = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      edad.trim() === isNaN ||
      edad.trim() < 0
    ) {
      actualizarError(true);
      return;
    } else {
      actualizarError(false);
      // asignar id
      dato.id = shortid.generate();

      //   Crear el nuevo dato

      crearDato(dato);

      // Reiniciar formulario

      actualizarDato({
        nombre: "",
        apellido: "",
        edad: "",
      });
    }
  };
  return (
    <Fragment>
      <h2>Añadir usuario</h2>
      {error ? <p className='alert-error'>Es necesario rellenar todos los campos.</p> : null}
      <form onSubmit={submitDato}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Introduce tu nombre"
          value={nombre}
          onChange={actualizarState}
        ></input>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          placeholder="Introduce tu apellido"
          value={apellido}
          onChange={actualizarState}
        ></input>
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          placeholder="Introduce tu edad"
          value={edad}
          onChange={actualizarState}
        ></input>
        <button type="submit" class="btn btn-success">Agregar Usuario</button>
      </form>
    </Fragment>
  );
};

export default Formulario;
