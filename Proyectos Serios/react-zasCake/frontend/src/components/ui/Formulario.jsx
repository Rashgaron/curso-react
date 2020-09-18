import React, { useState } from 'react'
import clienteAxios from '../../config/axios'
const Formulario = () => {
  const [alerta, guardarAlerta] = useState({
    evento: false,
    msg: '',
    categoria: ''
  })

  const [correo, guardarCorreo] = useState({
    email: '',
    consulta: '',
    imagen: ''
  })

  const { email, consulta, imagen } = correo

  const handleChange = e => {
    guardarCorreo({
      ...correo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (email.trim() === '' || consulta.trim() === '') {
      let mensaje = ''
      if (email.trim() === '') mensaje += 'Correo obligatorio'
      if (consulta.trim() === '') mensaje += ' Consulta obligatoria'
      guardarAlerta({
        evento: true,
        msg: mensaje,
        categoria: 'danger'
      })

      setTimeout(function () {
        guardarAlerta({
          evento: false,
          msg: ''
        })
      }, 4000)

      return
    } else {
      try {
        clienteAxios.post('api/correo', { email, consulta })
      } catch (error) {
        console.log(error)
      }
      guardarAlerta({
        evento: true,
        msg: 'Consulta enviada con éxito',
        categoria: 'success'
      })

      setTimeout(function () {
        guardarAlerta({
          evento: false,
          msg: ''
        })
      }, 4000)
      guardarCorreo({
        email: '',
        consulta: '',
        imagen: ''
      })
    }
  }
  let className=`alert alert-${alerta.categoria}`
  return (
    <div className='col-6'>
      <form onSubmit={handleSubmit}>
        {alerta.evento ? (

          <div className={className} role='alert'>
            {alerta.msg}
          </div>
        ) : null}
        <div className='form-group'>
          <label>Correo de contacto:</label>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='Introduce tu mail'
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Que quieres consultar?</label>
          <textarea
            className='form-control'
            type='text'
            name='consulta'
            value={consulta}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* <div className='form-group'>
          <label>Enséñame tu propuesta:</label>
          <input
            type='file'
            className='form-control-file'
            name='imagen'
            value={imagen}
            onChange={handleChange}
          ></input>
        </div> */}
        <button className='btn btn-success'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario
