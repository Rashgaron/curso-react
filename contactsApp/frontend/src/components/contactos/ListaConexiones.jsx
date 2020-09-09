import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Paginacion from '../ui/Paginacion'
import Conexion from './Conexion'
const ListaConexiones = () => {
  const conexiones = useSelector(state => state.contacts.contactosConectados)
  const busquedaConectados = useSelector(
    state => state.contacts.busquedaConectados
  )
  const [pagina, guardarPagina] = useState(0)

  useEffect(() => {
    guardarPagina(0)
  }, [conexiones])

  let paginaMostrar = pagina * 20

  let conexionesMostrar = []

  let paginasTotales = 0
  if (conexiones.length !== 0) {
    if (busquedaConectados.length === 0) {
      for (let i = paginaMostrar; i < paginaMostrar + 20; i++) {
        if (!conexiones[i]) break
        conexionesMostrar.push(JSON.parse(JSON.stringify(conexiones[i])))
      }
      paginasTotales = parseInt(conexiones.length / 20)
    } else {
      for (let i = paginaMostrar; i < paginaMostrar + 20; i++) {
        if (!busquedaConectados[i]) break
        conexionesMostrar.push(
          JSON.parse(JSON.stringify(busquedaConectados[i]))
        )
      }

      paginasTotales = parseInt(busquedaConectados.length / 20)
    }

    return (
      <>
        <div className='row'>
          {conexionesMostrar.map(conexion => (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3' >
              <Conexion conexion={conexion} key={conexion.id}n></Conexion>
            </div>
          ))}

          <div className='col-12'>
            <Paginacion
              pagina={pagina}
              guardarPagina={guardarPagina}
              totalPaginas={paginasTotales}
            ></Paginacion>
          </div>
        </div>
      </>
    )
  } else return null
}

export default ListaConexiones
