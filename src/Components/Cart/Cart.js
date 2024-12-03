import React, { useContext} from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CartItem from "../CartItems/CartItems";
import CartContext from "../../store/CartContext/cart-context";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Cart.module.css";



const Cart = (props) => {

  
  
  const cartCtx = useContext(CartContext);


  
  const handleClose = () => {
    
    cartCtx.setShowCart(false)
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id); 
  };

  const cartItems = cartCtx.cart || [];


  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  

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

              
              {cartCtx.cart.map((item, index) => (
                <CartItem 
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    index={index}
                    key={item.id}
                    id={item.id}
                    onRemove={removeItemHandler}
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
