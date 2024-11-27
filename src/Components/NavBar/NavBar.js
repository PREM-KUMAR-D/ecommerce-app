import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button , Badge, Container } from "react-bootstrap";

const NavBar = (props) => {

  return (
      <Navbar className="bg-black " variant="dark" fixed="top" >
        <Nav className="mx-auto text-center fw-bold">
          <Nav.Link href="#home" >HOME</Nav.Link>
          <Nav.Link href="#store">STORE</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
          <Button variant="outline-info">
            Cart <Badge bg="dark" className="ms-2">3</Badge>
          </Button>
        </div>
      </Navbar>
  )

}

export default NavBar;