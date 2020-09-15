import React from 'react';
import Home from './pages/Home';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className="container-fluid">
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/logIn" component={Login}></Route>
					</Switch>
				</Router>
				<Footer></Footer>
			</div>
		</Provider>
	);
}

export default App;
