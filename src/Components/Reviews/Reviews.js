import React, { useState } from "react";
import { Form, Button, ListGroup, Row, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 

const Reviews = () => {
    const [reviews, setReviews] = useState([
        { user: "John", text: "Amazing product!", rating: 5 },
        { user: "Jane", text: "Really loved the colors!", rating: 4 },
        { user: "Smith", text: "Worth the price.", rating: 3 },
    ]);
    const [newReview, setNewReview] = useState("");
    const [newRating, setNewRating] = useState(0);

    const addReviewHandler = () => {
        if (newReview.trim()) {
            setReviews([
                ...reviews,
                { user: "Anonymous", text: newReview, rating: newRating },
            ]);
            setNewReview("");
            setNewRating(0);
        }
    };

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} color="gold" />);
            } else if (i - rating < 1) {
                stars.push(<FaStarHalfAlt key={i} color="gold" />);
            } else {
                stars.push(<FaRegStar key={i} color="gold" />);
            }
        }
        return stars;
    };

    return (
        <div style={{ padding: "20px", borderLeft: "1px solid #ddd" }}>
            <h3>Reviews</h3>
            <ListGroup>
                {reviews.map((review, index) => (
                    <ListGroup.Item key={index}>
                        <Row>
                            <Col xs={8}>
                                <strong>{review.user}</strong>: {review.text}
                            </Col>
                            <Col xs={4}>
                                {renderStars(review.rating)}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Form.Control
                type="text"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write a review..."
                style={{ marginTop: "10px", marginBottom: "10px" }}
            />

            <Form.Control
                as="select"
                value={newRating}
                onChange={(e) => setNewRating(Number(e.target.value))}
                style={{ marginBottom: "10px" }}
            >
                <option value={0}>Select Rating</option>
                {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                        {star} Stars
                    </option>
                ))}
            </Form.Control>

            <Button onClick={addReviewHandler} style={{ padding: "5px 10px" }}>
                Add Review
            </Button>
        </div>
    );
};

export default Reviews;
