import React, { Fragment, useState } from 'react'
const NuevoProyecto = () => {

    //State para Proyecto

    const [proyecto, guardarProyecto] = useState({
        nombre:''
    })

    const {nombre} = proyecto

    const onChangeProyecto=e=>{
        guardarProyecto({
            ...proyecto, [e.target.name]:e.target.value
        })
    }

    const onSubmitProyecto=e=>{
        e.preventDefault();

        //Validar proyecto

        //Agregar al State

        //Reiniciar el form
    }
  return (
    <Fragment>
      <button type='button' className='btn btn-block btn-primario'>
        Nuevo Proyecto
      </button>

      <form className='formulario-nuevo-proyecto'>
        <input
          type='text'
          className='input-text'
          placeholder='Nombre Proyecto'
          name='nombre'
          value={nombre}
          onChange={onChangeProyecto}
        ></input>

        <input
          type='submit'
          className='btn btn-primario btn-block'
          value='Agregar Proyecto'
        ></input>
      </form>
    </Fragment>
  )
}

export default NuevoProyecto
