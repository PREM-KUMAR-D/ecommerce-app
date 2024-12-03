import React, { useContext } from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";  
import CartContext from "../../store/cart-context";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {

  const cartCtx = useContext(CartContext);

  const handleOpenCart = () => {
    console.log(JSON.stringify(handleOpenCart));
    cartCtx.setShowCart(true);
  }

  return (
    <Navbar className="bg-black" variant="dark" fixed="top">
      <Nav className="mx-auto text-center fw-bold">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          HOME
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          STORE
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          CONTACT US
        </NavLink>
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
