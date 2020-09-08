import React from 'react';
import Header from './components/layout/Header';
import Formulario from './components/layout/Formulario';
import ListaCartas from './components/cartas/ListaCartas';
import Navegacion from './components/nav/Navegacion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/layout/Inicio';
import Busqueda from './components/layout/Busqueda';
import MisCartas from './components/layout/MisCartas';
import CrearCuenta from './components/usuarios/crearCuenta';

// Firebase

import firebase, { FirebaseContext } from './firebase/index';

// REDUX
import { Provider } from 'react-redux';
import store from './store';
const Principal = (props) => {
	const { Component, pageProps } = props;
	return (
		<Provider store={store}>
			<FirebaseContext.Provider
				value={{
					firebase,
				}}
			>
				<Component {...pageProps}></Component>
				<div className="container">
					<Header />

					<Router>
						<Navegacion />
						<div className="busqueda-container">
							<Switch>
								<Route exact path="/" component={Inicio}></Route>
								<Route exact path="/busqueda" component={Busqueda}></Route>
								<Route exact path="/mis-cartas" component={MisCartas}></Route>
								<Route exact path="/crear-cuenta" component={CrearCuenta}></Route>
							</Switch>
						</div>
					</Router>
				</div>
			</FirebaseContext.Provider>
		</Provider>
	);
};

export default Principal;
