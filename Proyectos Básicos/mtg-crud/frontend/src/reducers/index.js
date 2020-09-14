import { combineReducers } from "redux";
import cartasReducer from "./cartasReducer";
export default combineReducers({
  carta: cartasReducer,
});
