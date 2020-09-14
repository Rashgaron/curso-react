import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./routes/Inicio";
import Empresa from "./routes/Empresa";
import Catalogo from "./routes/Catalogo";
import Contacto from "./routes/Contacto";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="container bg-light mt-4">
        <div className="pt-4">
          <Navigation />
          <hr />
        </div>
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/empresa" component={Empresa} exact />
          <Route path="/catalogo" component={Catalogo} exact />
          <Route path="/contacto" component={Contacto} exact />
        </Switch>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
