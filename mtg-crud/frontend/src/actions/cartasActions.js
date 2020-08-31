import {
  BUSCAR_CARTA,
  BUSCAR_CARTA_ERROR,
  BUSCAR_CARTA_EXITO,
  GUARDAR_CARTAS,
  GUARDAR_CARTAS_EXITO,
  GUARDAR_CARTAS_ERROR,
} from "../types/index";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Guardar Carta

export function buscarCartaAction(carta) {
  return async (dispatch) => {
    dispatch(buscarCarta(carta));
    try {
      let resultado;
     
      
        resultado = await clienteAxios.get(`search?q=name%3A${carta.nombre}+lang%3A${carta.language}`)
  
        resultado = resultado.data.data
        console.log(resultado)
   
      dispatch(buscarCartaExito(resultado));
    } catch (error) {
      console.log(error);
      buscarCartaError();
    }
  };
}

const buscarCarta = (carta) => ({
  type: BUSCAR_CARTA,
  payload: carta,
});
const buscarCartaExito = (cartas) => (
{
  type: BUSCAR_CARTA_EXITO,
  payload: cartas,
});
const buscarCartaError = () => ({
  type: BUSCAR_CARTA_ERROR,
});


// Guardar cartas

export function guardarCartasAction(cartas){
  return (dispatch) =>{
    dispatch(guardarCartas(cartas))
    try {
      console.log(cartas)
      dispatch( guardarCartasExito(cartas))
    
     } catch (error) {
      console.log(error)
      dispatch(guardarCartasError())
    }
  }
}

const guardarCartas = (cartas)=>({
  type:GUARDAR_CARTAS,
  payload:cartas
})
const guardarCartasExito = cartas =>(
 {
  type:GUARDAR_CARTAS_EXITO,
  payload:cartas
})

const guardarCartasError = ()=>({
  type:GUARDAR_CARTAS_ERROR
})