import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from "react-bootstrap";

const NavBar = (props)=>{

    return (
        <Navbar className="bg-black" variant="dark">
              <Nav className="mx-auto text-center fw-bold">

                <Nav.Link href="#home" >HOME</Nav.Link>
                <Nav.Link href="#store">STORE</Nav.Link>
                <Nav.Link href="#about">ABOUT</Nav.Link>
              </Nav>

        </Navbar>
    )

}

export default NavBar;