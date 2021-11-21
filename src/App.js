// src/App.js

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import {Container, FormControl, Navbar, Nav, Form, Button} from "react-bootstrap";
//import Profesor from "./components/Profesor";
import Login from "./Login";
import Profesores from "./Profesores";
import PrivateRoute from "./PrivateRoute";
import Category from "./Category";

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
              
        <Nav.Link href="/profesores" className="text-white">Profesores</Nav.Link>
        <Nav.Link href="/login" className="text-grey">Equipo ProfeCión</Nav.Link>
        <Nav.Link href="/login" className="text-white">Iniciar Sesión</Nav.Link>
        
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className="text-white" >Buscar</Button>
      </Form>
    
  </Container>
</Navbar>
  
      <Container>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/Category">
        <Category/>
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