import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/tokenAuth";
import RutaPrivada from "./components/rutas/rutaPrivada";
//Revisar si tenemos un token

const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ProyectoState>
      <TareaState>
        <AuthState>
          <AlertaState>
            <div className="App">
              <Router>
                <Switch>
                  <Route exact path="/" component={Login}></Route>
                  <Route
                    exact
                    path="/nueva-cuenta"
                    component={NuevaCuenta}
                  ></Route>
                  <RutaPrivada
                    exact
                    path="/proyectos"
                    component={Proyectos}
                  ></RutaPrivada>
                </Switch>
              </Router>
            </div>
          </AlertaState>
        </AuthState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
