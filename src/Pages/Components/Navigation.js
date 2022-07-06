import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';


export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
