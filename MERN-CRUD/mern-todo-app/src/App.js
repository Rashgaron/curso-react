import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo-component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">MERN-STACK Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
