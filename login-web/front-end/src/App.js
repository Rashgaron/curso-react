import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function App() {
  const [login, guardarLogin] = useState(false);

  const [user, guardarUsuario] = useState({
    usuario: "",
    password: "",
  });

  const buscarUsuario = () => {
    console.log(user);
    axios
      .post("https://crud-login-dani.herokuapp.com/login", user)
      .then((res) => {
        if (res.data.length !== 0) {
          guardarLogin(true);
        } else {
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user.usuario !== "" && user.password !== "") buscarUsuario();
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          {login ? (
            <Login user={user} guardarLogin={guardarLogin}></Login>
          ) : (
            <div>
              <Formulario guardarUsuario={guardarUsuario} ></Formulario>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
