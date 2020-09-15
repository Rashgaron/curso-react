import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import carritoReducer from './carritoReducer';
import productosReducer from './productosReducer';
export default combineReducers({
	firebaseReducer,
    carritoReducer,
    productosReducer
});
