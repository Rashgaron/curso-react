import React from "react";
import Header from "./components/layout/Header";
import Formulario from "./components/layout/Formulario";
import ListaCartas from "./components/cartas/ListaCartas";
import Navegacion from "./components/nav/Navegacion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/layout/Inicio";
import Busqueda from "./components/layout/Busqueda";
import MisCartas from "./components/layout/MisCartas";
// REDUX
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />

        <Router>
          <Navegacion />
          <div className="busqueda-container">
            <Switch>
              <Route exact path="/" component={Inicio}></Route>
              <Route exact path="/busqueda" component={Busqueda}></Route>
              <Route exact path="/mis-cartas" component={MisCartas}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
