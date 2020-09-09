import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Paginacion from '../ui/Paginacion'
import Conexion from './Conexion'
const ListaConexiones = () => {
  const conexiones = useSelector(state => state.contacts.contactosConectados)

  const [pagina, guardarPagina] = useState(0)

  useEffect(() => {
    guardarPagina(0)
  }, [conexiones])

  let paginaMostrar = pagina * 20

  let conexionesMostrar = []
  if (conexiones.length !== 0) {
    for (let i = paginaMostrar; i < paginaMostrar + 20; i++) {
      if (!conexiones[i]) break
      conexionesMostrar.push(JSON.parse(JSON.stringify(conexiones[i])))
    }

    return (
      <>
        <div className='row'>
          {conexionesMostrar.map(conexion => (
            <div className='col-3' key={conexion.id}>
              <Conexion conexion={conexion}></Conexion>
            </div>
          ))}

          <div className='col'>
            <Paginacion
              pagina={pagina}
              guardarPagina={guardarPagina}
              totalPaginas={parseInt(conexiones.length / 20)}
            ></Paginacion>
          </div>
        </div>
      </>
    )
  } else return null
}

export default ListaConexiones
