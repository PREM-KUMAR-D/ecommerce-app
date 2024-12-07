import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from "../../Components/Reviews/Reviews";
import './Product.css'; 

const productsArr = [
    {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        description: 'Beautiful collection of colors.',
        alternateImages: [
            'https://picsum.photos/id/1/300/300',
            'https://picsum.photos/id/2/300/300',
            'https://picsum.photos/id/3/300/300'
        ]
    },
    {
        id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        description: 'Beautiful collection of colors.',
        alternateImages: [
            'https://picsum.photos/id/4/300/300',
            'https://picsum.photos/id/5/300/300',
            'https://picsum.photos/id/6/300/300'
        ]
    },
    {
        id:3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        description: 'Beautiful collection of colors.',
        alternateImages: [
            'https://picsum.photos/id/7/300/300',
            'https://picsum.photos/id/8/300/300',
            'https://picsum.photos/id/9/300/300'
        ]
    },
    {
        id:4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        description: 'Beautiful collection of colors.',
        alternateImages: [
            'https://picsum.photos/id/10/300/300',
            'https://picsum.photos/id/11/300/300',
            'https://picsum.photos/id/12/300/300'
        ]
    }
    
];

const Products = () => {
    const { productId } = useParams();
    const product = productsArr.find((prod) => prod.id === parseInt(productId));

    const [mainImage, setMainImage] = useState(product?.imageUrl || "");
    const [alternateImages, setAlternateImages] = useState(product?.alternateImages || []);
    const [zoomStyles, setZoomStyles] = useState(null);
    const [overlayStyles, setOverlayStyles] = useState(null);
    const [isZooming, setIsZooming] = useState(false);

    if (!product) {
        return <p>Product not found!</p>;
    }

    const handleImageClick = (clickedImage) => {
        const currentMain = mainImage;
        setMainImage(clickedImage);
        const updatedAlternateImages = alternateImages.map(img =>
            img === clickedImage ? currentMain : img
        );
        setAlternateImages(updatedAlternateImages);
    };

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        
        const overlayWidth = rect.width / 4;
        const overlayHeight = rect.height / 4;

        const overlayLeft = Math.min(
            Math.max(0, e.clientX - rect.left - overlayWidth / 2),
            rect.width - overlayWidth
        );
        const overlayTop = Math.min(
            Math.max(0, e.clientY - rect.top - overlayHeight / 2),
            rect.height - overlayHeight
        );

        setZoomStyles({
            backgroundImage: `url(${mainImage})`,
            backgroundPosition: `${x}% ${y}%`,
            backgroundSize: "200%", // Adjust zoom level
            width: "300px",
            height: "300px",
            border: "1px solid #ddd",
        });

        setOverlayStyles({
            position: "absolute",
            left: overlayLeft,
            top: overlayTop,
            width: `${overlayWidth}px`,
            height: `${overlayHeight}px`,
            border: "2px solid rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            pointerEvents: "none", 
        });

        setIsZooming(true);
    };

    const handleMouseLeave = () => {
        setZoomStyles(null);
        setOverlayStyles(null);
        setIsZooming(false);
    };

    return (
        <Container style={{ padding: "20px" }}>
            <Row>
                <Col md={8} style={{ borderRight: "1px solid #ddd", padding: "20px" }}>
                    <h2>{product.title}</h2>
                    <Row>
                        <Col xs={8} className="product-image-container">
                            <img
                                src={mainImage}
                                alt={product.title}
                                className="product-image"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                            {overlayStyles && <div className="overlay-zoom" style={overlayStyles}></div>}
                        </Col>
                        <Col xs={4}>
                            <Row className="alternate-images">
                                {alternateImages.map((altImage, index) => (
                                    <Col xs={12} key={index} className="mb-3">
                                        <img
                                            src={altImage}
                                            alt={`Alternate ${index + 1}`}
                                            onClick={() => handleImageClick(altImage)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Price: <strong>${product.price}</strong></p>
                </Col>
                <Col md={4} style={{ position: "relative" }}>
                    <Reviews />
                    {isZooming && (
                        <div
                            className="zoomed-area"
                            style={{
                                ...zoomStyles,
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        ></div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Products;
