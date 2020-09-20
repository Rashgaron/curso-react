import React from "react";
import Home from "./pages/Home";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Tienda from "./pages/Tienda";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/logIn" component={Login}></Route>
            <Route exact path="/signIn" component={SignIn}></Route>
            <Route exact path="/contacto" component={Contacto}></Route>
            <Route exact path="/carrito" component={Carrito}></Route>
            <Route exact path="/tienda" component={Tienda}></Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
