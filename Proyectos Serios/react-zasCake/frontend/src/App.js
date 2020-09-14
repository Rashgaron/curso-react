import React from 'react';
import Home from './pages/Home'
import Header from './components/ui/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
	return (
		<div className="container-fluid">
			<Router>
        <Header></Header>
				<Switch>
					<Route exact path='/' component={Home}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
