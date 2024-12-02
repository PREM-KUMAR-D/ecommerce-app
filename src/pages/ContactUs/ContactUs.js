import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from "react-bootstrap";

const ContactUs = (props) => {

    const fireBaseUrl = process.env.REACT_APP_FIRE_BASE_URL; 

    const formSubmitHandler = async (event)=>{
        event.preventDefault();

        const contactUs = {
            name: event.target.formName.value,
            email: event.target.formEmail.value,
            phone: event.target.formPhone.value
        }
        

        const res = await fetch(`${fireBaseUrl}/contact-us.json`,{
            method:'POST',
            body: JSON.stringify(contactUs),
            headers:{
              'Content-type': 'application/json'
            }
          })

        
    }


    return (
        <>

            <Header disableCart={true} headerButtonEnabled={false} />

            <Container>

                <Form onSubmit={formSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Ph No:" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>



            </Container>



            <Footer enableSocials={true} />

        </>

    )
}

export default ContactUs;