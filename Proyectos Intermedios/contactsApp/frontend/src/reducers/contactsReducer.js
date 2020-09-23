import {
  SELECCIONAR_CONTACTO,
  BUSCAR_CONEXIONES,
  BUSCAR_LETRA,
  DESCARGAR_CONTACTOS,
  DESCARGAR_CONTACTOS_EXITO,
  BUSCAR_CONTACTO,
  BUSCAR_CONTACTO_EXITO,
} from "../types";
const initialState = {
  contactos: [],
  busqueda: [],
  busquedaConectados: [],
  contactosConectados: [],
  contactoSeleccionado: [],
  letraSeleccionada: "",

  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BUSCAR_CONTACTO:
      return {
        ...state,
        busqueda: [],
        busquedaConectados: [],
      };
    case BUSCAR_CONTACTO_EXITO:
      const insertarContactos = (action, contactos, tipo) => {
        let maxLength = action.payload.busqueda.length;
        for (let i = 0; i < contactos.length; i++) {
          let insertar = true;

          for (let j = 0; j < maxLength; j++) {
            if (action.payload.busqueda[j] !== contactos[i].name[j]) {
              insertar = false;
              break;
            }
          }

          if ((tipo === "general") & insertar)
            state.busqueda.push(contactos[i]);
          if ((tipo === "conexiones") & insertar)
            state.busquedaConectados.push(contactos[i]);
        }

        if (tipo === "general") state.busqueda.push({ end: "true" });
        if (tipo === "conexiones")
          state.busquedaConectados.push({ end: "true" });
      };
      if (action.payload.tipo === "general") {
        insertarContactos(action, state.contactos, action.payload.tipo);
      } else if ((action.payload.tipo = "conexiones")) {
        insertarContactos(action, state.contactos, action.payload.tipo);
      }

      return { ...state };
    case SELECCIONAR_CONTACTO:
      return {
        ...state,
        contactoSeleccionado: action.payload,
        contactosConectados: [],
        busqueda: [],
        busquedaConectados: [],
      };

    case BUSCAR_CONEXIONES:
      for (let i = 0; i < state.contactoSeleccionado.connections.length; i++) {
        for (let j = 0; j < state.contactos.length; j++)
          if (
            state.contactos[j].connections.find(
              (connection) =>
                connection === state.contactoSeleccionado.connections[i]
            )
          )
            if (
              !state.contactosConectados.find(
                (contacto) => contacto.id === state.contactos[j].id
              ) &&
              state.contactos[j].id !== state.contactoSeleccionado.id
            ) {
              state.contactosConectados.push(state.contactos[j]);
            }
      }

      return {
        ...state,
        busqueda: [],
        busquedaConectados: [],
      };
    case BUSCAR_LETRA:
      state.busqueda = [];
      for (let i = 0; i < state.contactos.length; i++) {
        if (state.contactos[i].name[0] === action.payload)
          state.busqueda.push(state.contactos[i]);
      }

      return {
        ...state,
      };
    case DESCARGAR_CONTACTOS:
      return {
        ...state,
        loading: true,
      };
    case DESCARGAR_CONTACTOS_EXITO:
      return {
        ...state,
        loading: false,
        contactos: action.payload,
      };
    default:
      return state;
  }
}
