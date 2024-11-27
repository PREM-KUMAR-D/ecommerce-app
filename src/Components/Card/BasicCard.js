import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./BasicCard.module.css"
import { Card, Button, Badge } from "react-bootstrap";

const BasicCard = (props) => {

    return (
        <Card className={`${classes.card} m-4`}>
            <Card.Title className="text-center times-bold">{props.title}</Card.Title>


            <div className={classes['card-img-wrapper']}>
                <Card.Img variant="top" className={classes['card-img-top']} src={props.image} />
            </div>
            <Card.Body className="d-flex justify-content-between">

                <Badge bg="white" className="ms-2 fs-4" text="dark">${props.price}</Badge>

                <Button variant="primary">Add to Cart</Button>


            </Card.Body>
        </Card>
    );

}

export default BasicCard;