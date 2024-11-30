import React, { useContext } from "react";
import { Navbar, Nav, Button , Badge, Container } from "react-bootstrap";
import CartContext from "../../store/cart-context";

import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = (props) => {

  const cartCtx = useContext(CartContext);

  const handleOpenCart = ()=>{
    console.log(JSON.stringify(handleOpenCart))
    cartCtx.setShowCart(true);
  }

  return (
      <Navbar className="bg-black " variant="dark" fixed="top" >
        <Nav className="mx-auto text-center fw-bold">
          <Nav.Link href="/home" >HOME</Nav.Link>
          <Nav.Link href="/store">STORE</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
        </Nav>
        {!props.disableCart && ( 
        <div className="d-flex align-items-center">
          <Button variant="outline-info" onClick={handleOpenCart}>
            Cart <Badge bg="dark" className="ms-2">3</Badge>
          </Button>
        </div>
      )}
      </Navbar>
  )

}

export default NavBar;