import React from "react";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import NuevaTarea from "./components/nuevaTarea";
// Redux

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">
          <h1>Gestiona tus tareas</h1>

          <Switch>
            <Route exact path="/" component={Inicio}></Route>
            <Route exact path="/nueva-tarea" component={NuevaTarea}></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
