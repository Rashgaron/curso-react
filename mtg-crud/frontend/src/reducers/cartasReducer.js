import {
  BUSCAR_CARTA,
  BUSCAR_CARTA_ERROR,
  BUSCAR_CARTA_EXITO,
  GUARDAR_CARTAS_EXITO,
  GUARDAR_CARTAS_ERROR,
  GUARDAR_CARTAS
} from "../types/index";

const initialState = {
  cartaBuscar: {},
  cartas: [],
  error: null,
  loading: null,
  busquedaCorrecta: null,
  cartasGuardadas:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BUSCAR_CARTA:
      console.log(action.payload)
      return {
        ...state,
        loading: true,
        cartaBuscar: action.payload,
        busquedaCorrecta: null
      };
      case GUARDAR_CARTAS_ERROR:
    case BUSCAR_CARTA_ERROR:
        return{
            ...state,
            loading:null,
            error:true
        }
    case BUSCAR_CARTA_EXITO:
        console.log(action.payload)
      return {
        ...state,
        loading: null,
        error: null,
        cartas: action.payload,
        busquedaCorrecta: true
      };
      case GUARDAR_CARTAS_EXITO:
        return{
          ...state,
          cartasGuardadas:[...state,action.payload]
        }
    default:
      return state;
  }
}
