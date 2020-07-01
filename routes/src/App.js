import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./routes/Inicio";
import Empresa from "./routes/Empresa";
import Catalogo from "./routes/Catalogo";
import Contacto from "./routes/Contacto";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="mt-2">
          <Navigation></Navigation>
        </div>
        <Switch>
          <Route path="/" component={Inicio} exact ></Route>
          <Route path="/empresa" component={Empresa} exact></Route>
          <Route path="/catalogo" component={Catalogo} exact></Route>
          <Route path="/contacto" component={Contacto} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
