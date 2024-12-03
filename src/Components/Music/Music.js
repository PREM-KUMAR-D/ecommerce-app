import React, { useContext } from "react";
import BasicCard from "../Card/BasicCard";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToastContext from "../../store/ToastContext/toast-context";

const productsArr = [
    {
        id:1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        alternateImages : ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png']
    },
    {
        id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        alternateImages : ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png']
    },
    {
        id:3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        alternateImages : ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png']
    },
    {
        id:4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        alternateImages : ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png']
    }
];

const Music = () => {

    const toastCtx = useContext(ToastContext);
    

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h2 className="metal-mania text-center mb-4">Music</h2>

            <Row className="g-4 w-100 justify-content-center">
                {productsArr.map((prod) => (
                    <Col xs={12} md={6} lg={4} key={prod.title}>
                        <BasicCard
                            id={prod.id}
                            image={prod.imageUrl}
                            title={prod.title}
                            price={prod.price}
                            onAddToast={(message)=>toastCtx.addToast(message)}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Music;
