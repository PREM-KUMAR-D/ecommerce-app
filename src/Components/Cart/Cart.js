import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        right: "0%",
        width: "400px",
        height: "100vh",
        zIndex: 1050,
        overflowY: "auto",
      }}
    >
      <Card
        style={{
          backgroundColor: "white",
          padding: "15px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          height: "100%"
        }}
      >
        <Card.Header className="d-flex justify-content-between">
          <h5 className="mb-0">Cart</h5>
        </Card.Header>
        <Card.Body>
          <p>Your cart is empty!</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
