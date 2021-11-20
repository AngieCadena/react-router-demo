import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Navbar,Nav,Container} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg"  collapseOnSelect>
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand> ProfeCión </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toogle aria-controls="basic-navbar-Nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to="/equipoProfecion">
                    <Nav.Link>Equipo ProfeCión</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/inicioSesion">
                    <Nav.Link>
                        <i className="fas fa-user"> </i>Iniciar sesión
                        </Nav.Link>
                </LinkContainer>  
                </Nav> 
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>

    );
};