import { GUARDAR_DATO } from "../types"


export default(state,action)=>{
switch(action.type){

    case GUARDAR_DATO:
        return{
            ...state,
            dato:action.payload
        }
    default:
        return state
}
}