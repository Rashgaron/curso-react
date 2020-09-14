import React from 'react';
import Header from './components/layout/Header';
import Navegacion from './components/nav/Navegacion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/layout/Inicio';
import Busqueda from './components/layout/Busqueda';
import MisCartas from './components/layout/MisCartas';
import CrearCuenta from './components/usuarios/crearCuenta';
import Login from './components/usuarios/Login';

// Firebase

import firebase, { FirebaseContext } from './firebase/index';
import useAutenticacion from './hooks/useAutenticacion';

// import App from 'next/app'
// REDUX
import { Provider } from 'react-redux';
import store from './store';
function MyApp() {
	const usuario = useAutenticacion();

	return (
		<FirebaseContext.Provider
			value={{
				firebase,
				usuario,
			}}
		>
			<Provider store={store}>
				<div className="container">
					<Router>
						<Header />
						<Navegacion />
						<div className="busqueda-container">
							<Switch>
								<Route exact path="/" component={Inicio}></Route>
								<Route exact path="/busqueda" component={Busqueda}></Route>
								<Route exact path="/mis-cartas" component={MisCartas}></Route>
								<Route exact path="/login" component={Login}></Route>
								<Route exact path="/crear-cuenta" component={CrearCuenta}></Route>
							</Switch>
						</div>
					</Router>
				</div>
			</Provider>
		</FirebaseContext.Provider>
	);
}

export default MyApp;
