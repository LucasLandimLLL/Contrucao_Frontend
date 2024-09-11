'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Filmes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
        <NavDropdown title="mais informações" id="basic-nav-dropdown">
            <NavDropdown.Item href="/filmes">filmes</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/">Home</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
