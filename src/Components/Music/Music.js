import React from "react";
import BasicCard from "../Card/BasicCard";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
];

const Music = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h2 className="metal-mania text-center mb-4">Music</h2>

            <Row className="g-4 w-100 justify-content-center">
                {productsArr.map((prod) => (
                    <Col xs={12} md={6} lg={4} key={prod.title}>
                        <BasicCard
                            image={prod.imageUrl}
                            title={prod.title}
                            price={prod.price}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Music;
