import React, { Fragment, useContext } from 'react'

import { FirebaseContext} from '../../firebase/index'

const Inicio = () => {
  const{ usuario, firebase} = useContext(FirebaseContext)
  return (
    <Fragment>
      {usuario
      ?
      <h1>Hola de nuevo {usuario.displayName}</h1>
    :
    <h1>Bienvenido a MTG DB</h1>
    }
      
      <p>Ahora tienes tu colección Magic the Gathering más cerca que nunca.</p>
      <p>
        Guarda todas tus cartas online y consulta tu stock en cualquier momento
        con una rápida búsqueda.
      </p>
    </Fragment>
  )
}

export default Inicio
