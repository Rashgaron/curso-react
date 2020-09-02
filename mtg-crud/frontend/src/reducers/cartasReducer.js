import {
  BUSCAR_CARTA,
  BUSCAR_CARTA_ERROR,
  BUSCAR_CARTA_EXITO,
  GUARDAR_CARTAS_EXITO,
  GUARDAR_CARTAS_ERROR,
  GUARDAR_CARTAS,
  ELIMINAR_CARTA,
  ELIMINAR_CARTA_EXITO,
  EDITAR_CARTA,
  EDITAR_CARTA_EXITO,
  EDITAR_CARTA_ERROR, DESCARGAR_CARTAS_EXITO
} from "../types/index";
import _ from "lodash";
import chunk from "lodash/chunk";
const initialState = {
  cartaBuscar: {},
  cartas: [],
  error: null,
  loading: null,
  busquedaCorrecta: null,
  cartasGuardadas: [],
};
let indice;
export default function (state = initialState, action) {
  switch (action.type) {
    case BUSCAR_CARTA:
      return {
        ...state,
        loading: true,
        cartaBuscar: action.payload,
        busquedaCorrecta: null,
      };
    case EDITAR_CARTA_ERROR:
    case GUARDAR_CARTAS_ERROR:
    case BUSCAR_CARTA_ERROR:
      return {
        ...state,
        loading: null,
        error: true,
      };
    case BUSCAR_CARTA_EXITO:
      return {
        ...state,
        loading: null,
        error: null,
        cartas: action.payload,
        busquedaCorrecta: true,
      };
    case GUARDAR_CARTAS_EXITO:
      indice = _.findIndex(state.cartasGuardadas, {
        id: action.payload.id,
      });

      if (indice !== -1) {
        console.log(state.cartasGuardadas[indice].cantidad);

        state.cartasGuardadas[indice].cantidad += action.payload.cantidad;
        return {
          ...state,
        };
      }
      return {
        ...state,
        cartasGuardadas: [...state.cartasGuardadas, action.payload],
      };

    case GUARDAR_CARTAS:
    case EDITAR_CARTA:
    case ELIMINAR_CARTA:
      return {
        ...state,
      };
    case ELIMINAR_CARTA_EXITO:
      return {
        ...state,
        cartasGuardadas: state.cartasGuardadas.filter(
          (carta) => carta.id !== action.payload.id
        ),
      };
    case EDITAR_CARTA_EXITO:
      indice = _.findIndex(state.cartasGuardadas, {
        id: action.payload.id,
      });

      if (indice !== -1) {
        console.log(state.cartasGuardadas[indice].cantidad);
        console.log(action.payload.cantidad);
        state.cartasGuardadas[indice] = action.payload;
        return {
          ...state,
        };
      }
      return {
        ...state,
      };

      case DESCARGAR_CARTAS_EXITO:
        return{
          ...state,
          cartasGuardadas:action.payload
        }
    default:
      return state;
  }
}
