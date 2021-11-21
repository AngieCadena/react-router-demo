// src/App.js

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import {Container, FormControl, Navbar, Nav, Form, Button} from "react-bootstrap";
//import Profesor from "./components/Profesor";
import Login from "./Login";
import Profesores from "./Profesores";
import PrivateRoute from "./PrivateRoute";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className="text-white">ProfeCión</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/profesores" className="text-white">Profesores</Nav.Link>
        <Nav.Link href="/login" className="text-white">Iniciar Sesión</Nav.Link>
        <Nav.Link href="/login" className="text-white">Equipo ProfeCión</Nav.Link>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
      <Container>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
               
        <Route path="/Profesores">
        <Profesores/>
        </Route> 
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
      </Container>
    </div>
  );
}  