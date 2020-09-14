import React from 'react';
import logo from './logo.svg';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import crearProducto from './components/crearProducto';
import Inicio from './components/Inicio';

// Redux

import { Provider } from 'react-redux';
import store from './store';

function App() {
	const history = useHistory();
	return (
		<div className="container">
			<Router>
				<Provider store={store}>
					<Switch>
						<Route exact path="/" component={Inicio} />
						<Route exact path="/crear-producto" component={crearProducto} />
					</Switch>
				</Provider>
			</Router>
		</div>
	);
}

export default App;
