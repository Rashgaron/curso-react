import firebase from '../firebase/config';

export function logInAction(email, password) {
	return async (dispatch) => {
		try {
			return await firebase.auth().signInWithEmailAndPassword(email, password);
		} catch (error) {
			return error;
		}
	};
}

export function signInAction(email, password){
	return async dispatch =>{
		try {
			return await firebase.auth().createUserWithEmailAndPassword(email,password)
		} catch (error) {
			return error
		}
	}
}

export function logOutAction() {
	return async (dispatch) => {
		try {
			return await firebase.auth().signOut();
		} catch (error) {
			console.log(error);
		}
	};
}
