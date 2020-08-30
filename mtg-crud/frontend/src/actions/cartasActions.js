import {
  BUSCAR_CARTA,
  BUSCAR_CARTA_ERROR,
  BUSCAR_CARTA_EXITO,
} from "../types/index";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
import Axios from "axios";

// Guardar Carta

export function buscarCartaAction(carta) {
  return async (dispatch) => {
    dispatch(buscarCarta(carta));
    console.log(carta);
    try {
      let resultado;
     
      
        resultado = await Axios.get(`https://api.scryfall.com/cards/search?q=name%3A${carta.nombre}+lang%3A${carta.language}`)
  
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
  
}