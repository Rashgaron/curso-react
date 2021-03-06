import React,{useContext, useEffect, useState} from 'react'
import Imagen from './Imagen'
import datoContext from '../context/datoContext'
const Listado = () => {

    const datosContext = useContext(datoContext)
    const {dato} = datosContext

    const {tipo, tema} = dato
    const [resultado, guardarResultados] = useState([])
    useEffect(() => {
        async function getDataApi() {
          try {
            const response = await fetch(
              `https://api.giphy.com/v1/${tipo}/search?api_key=7qj1Et2gYJqhCyGzxDnwopSWmif2v9Gd&q=${tema}&limit=25&offset=0&rating=r}&lang=es`
            );
            const data = await response.json();
            console.log(data.data);
            guardarResultados(data.data);
          } catch (err) {
            console.log(err);
          }
        }
    
        if(tema!=='')
          getDataApi();
        
      }, [tipo,tema]);

  //  resultados
  return (
    <div className='row justify-content-around align-items-center'>
      {resultado.map(res => (
        <Imagen key={res.id} res={res}></Imagen>
      ))}
    </div>
  )
}

export default Listado
