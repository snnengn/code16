import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar className="bg-light mx-0 border-bottom align-items-center">
        <Container fluid className="justify-content-center">
             <Nav className="nav">
            <Nav.Link className="nav-item me-3" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-item me-3" href="#about">About</Nav.Link>
            <Nav.Link className="nav-item me-3" href="#education">Education</Nav.Link>
            <Nav.Link className="nav-item me-3" href="#skills">Skills</Nav.Link>
            <Nav.Link className="nav-item" href="#experience">Experience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;