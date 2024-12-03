import React,{useContext} from "react";
import { Container, Row, Col , Button } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./CartItems.module.css";




const CartItem = (props) => {

    return (
    <Row key={props.index} className="py-2 align-items-center border-bottom">
            <Col className="d-flex align-items-center">
                <img
                    src={props.imageUrl}
                    alt={props.title}
                    className={classes.cartImg}
                />
                <span className="ms-3">{props.title}</span>
            </Col>
            <Col>${props.price}</Col>
            <Col>
                <input
                    type="text"
                    value={props.quantity}
                    className="form-control form-control-sm"
                    style={{ width: "60px", display: "inline" }}
                    readOnly={true}
                />
                <Button
                     variant="danger" 
                     size="sm" 
                     className="ms-2"
                     onClick={()=>props.onRemove(props.id)}
                     >
                    REMOVE
                </Button>
            </Col>
        </Row>
    );
};

export default CartItem;
