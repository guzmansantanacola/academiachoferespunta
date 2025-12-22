import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <BSNavbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <BSNavbar.Brand as={NavLink} to="/">
          <img 
            src={`${process.env.PUBLIC_URL}/Logo circular.png`} 
            alt="Inicio" 
            style={{ 
              maxWidth: '150px', 
              width: '50%', 
              height: 'auto' 
            }} 
          />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Inicio</NavLink>
            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
            <NavLink to="/cursos" className="nav-link">Cursos</NavLink>
            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
