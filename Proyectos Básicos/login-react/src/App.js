import React from 'react';
import Inicio from './layout/Inicio'
import Login from './user/Login'


// Router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
      <div className='container'>
			<Router>
        <Switch>
          <Route exact path ='/' component={Inicio}></Route>
          <Route exact path ='/login' component={Login}></Route>
          
        </Switch>
      </Router>
      </div>
		</Provider>
	);
}

export default App;
