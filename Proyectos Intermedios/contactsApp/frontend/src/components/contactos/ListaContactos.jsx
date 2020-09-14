import React, { useState, useEffect } from 'react'
import Contacto from './Contacto'
import Paginacion from '../ui/Paginacion'
import { useSelector } from 'react-redux'

const ListaContactos = () => {
  const [pagina, guardarPagina] = useState(0)

  const contactos = useSelector(state => state.contacts.contactos)
  const busqueda = useSelector(state => state.contacts.busqueda)
  const loading = useSelector(state => state.contacts.loading)
  useEffect(() => {
    guardarPagina(0)
  }, [contactos, busqueda])
  if (!loading) {
    let paginaMostrar = pagina * 50
    let contactosMostrar = []
    let totalPaginas = 0
    if (busqueda.length !== 0) {
      for (let i = paginaMostrar; i < paginaMostrar + 50; i++) {
        if (!busqueda[i]) break
        contactosMostrar.push(JSON.parse(JSON.stringify(busqueda[i])))
      }
      totalPaginas = busqueda.length / 50
    } else {
      for (let i = paginaMostrar; i < paginaMostrar + 50; i++) {
        if (!contactos[i]) break
        contactosMostrar.push(JSON.parse(JSON.stringify(contactos[i])))
      }

      totalPaginas = contactos.length / 50
    }

    return (
      <>
        <ul className='p-0'>
          {contactosMostrar.map(contacto => (
            <Contacto key={contacto.id} contacto={contacto}></Contacto>
          ))}
        </ul>
        <Paginacion
          pagina={pagina}
          guardarPagina={guardarPagina}
          totalPaginas={parseInt(totalPaginas)}
        ></Paginacion>
      </>
    )
  } else
    return (
     <p>Cargando ...</p>
    )
}
export default ListaContactos
