import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import CrearCuenta from './paginas/CrearCuenta';
import Contactos from './paginas/Contactos';
import { Provider } from 'react-redux';
import store from './store';
import RutaPrivada from './rutas/rutaPrivada';
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="container">
					<Switch>
						<Route exact path="/" component={Inicio}></Route>
						<Route exact path="/crear-cuenta" component={CrearCuenta}></Route>

						{/* TODO: hacer esta ruta privada */}
						<RutaPrivada exact path="/contactos" component={Contactos}></RutaPrivada>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
