import React, { useContext, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CartItem from "../CartItems/CartItems";
import CartContext from "../../store/cart-context";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Cart.module.css";

const cartElements = [
  {
    title: 'Colors',
    price: 12.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1,
  },
  {
    title: 'Black and white Colors',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 2,
  },
  {
    title: 'Yellow and Black Colors',
    price: 9.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext);


  const handleClose = () => {
    console.log(JSON.stringify(cartCtx))
    cartCtx.setShowCart(false)
  };


  const total = cartElements.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    (
      cartCtx.showCart && <div className={`${classes.cartContainer} p-3`}>
        <Card className={classes.cartCard}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0 metal-mania">Cart</h3>
            <Button className="align-self-center" variant="dark" onClick={handleClose}>X</Button>
          </Card.Header>
          <Card.Body>
            <Container fluid>
              
              <Row className="fw-bold border-bottom pb-2">
                <Col>Item</Col>
                <Col>Price</Col>
                <Col>Quantity</Col>
              </Row>

              
              {cartElements.map((item, index) => (
                <CartItem 
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    index={index}
                    key={index}
                />
              ))}

              
              <Row className="pt-3">
                <Col className="fw-bold">Total:</Col>
                <Col>${total}</Col>
                <Col></Col>
              </Row>

            
            </Container>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="success">PURCHASE</Button>
          </Card.Footer>
        </Card>
      </div>
    )
  );
};

export default Cart;
