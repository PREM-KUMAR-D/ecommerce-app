import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./BasicCard.module.css"
import { Card, Button, Badge } from "react-bootstrap";

const BasicCard = (props) => {

    return (
        <Card className={`${classes.card} m-4`}>
            <Card.Title className="text-center times-bold">{props.title}</Card.Title>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="d-flex justify-content-between">

                <Badge bg="white" className="ms-2 fs-4" text="dark">${props.price}</Badge>
                
                <Button variant="primary">Add to Cart</Button>
                

            </Card.Body>
        </Card>
    );

}

export default BasicCard;