import React from "react";
import Header from "./components/layout/Header";
import Formulario from "./components/layout/Formulario";
import ListaCartas from "./components/cartas/ListaCartas";
// REDUX
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row justify-content-center">
          <Header></Header>
        </div>
        <div className="row justify-content-center">
          <Formulario></Formulario>
        </div>
        <ListaCartas></ListaCartas>
      </div>
    </Provider>
  );
}

export default App;
