import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from "react-bootstrap";

const ContactUs = () => {
  const fireBaseUrl = process.env.REACT_APP_FIRE_BASE_URL;

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const contactUs = {
      name: event.target.formName.value,
      email: event.target.formEmail.value,
      phone: event.target.formPhone.value,
    };

    try {
      const res = await fetch(`${fireBaseUrl}/contact-us.json`, {
        method: 'POST',
        body: JSON.stringify(contactUs),
        headers: {
          'Content-type': 'application/json',
        },
      });
      
      if (!res.ok) {
        throw new Error("Failed to submit the form.");
      }
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error.message);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Contact Us</h2>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
