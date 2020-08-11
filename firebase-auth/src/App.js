import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
