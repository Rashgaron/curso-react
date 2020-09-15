import * as firebase from 'firebase/app';
import 'firebase/auth';

// App's Firebase Configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCTcc8BhuCemNydDJBGEw9XEmrpcMM2-mA',
	authDomain: 'fir-auth-4f57e.firebaseapp.com',
	databaseURL: 'https://fir-auth-4f57e.firebaseio.com',
	projectId: 'fir-auth-4f57e',
	storageBucket: 'fir-auth-4f57e.appspot.com',
	messagingSenderId: '331542359985',
	appId: '1:331542359985:web:d16230945d5d3e94271790',
	measurementId: 'G-8WLS1X4Z2V',
};

// Inicializa Firebase

firebase.initializeApp(firebaseConfig);

// Exportamos firebase

export default firebase;
