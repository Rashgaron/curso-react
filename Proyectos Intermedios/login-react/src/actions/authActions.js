import { Provider } from 'react-redux';
import firebase from '../firebase/config';

// Log In with firebasemport 

export function logInAction(email, password) {
	return async (dispatch) => {
		console.log('hola');
		try {
			return firebase.auth().signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log('adios');
			console.log(error);
		}
	};
}

export function logOutAction() {
	return async (dispatch) => {
		try {
			await firebase.auth().signOut();
		} catch (error) {
			console.log(error);
		}
	};
}

export function logInGoogleAction() {
	return async (dispatch) => {
		try {
			await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
			// firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider);
		} catch (error) {
			console.log(error);
		}
	};
}
