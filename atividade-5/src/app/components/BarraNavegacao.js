'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">TMDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Series">Populares</Nav.Link>
            <NavDropdown title="Seleções" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Series/Top">Top</NavDropdown.Item>
              <NavDropdown.Item href="/Series/NoAr">No Ar</NavDropdown.Item>
              <NavDropdown.Item href="/Series/NaTv">Na TV</NavDropdown.Item>

              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
