import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Nav, Container } from "react-bootstrap";

const Footer = (props) => {

    return (
        <footer className="bg-info">

            <Container className="d-flex flex-row">
                <h1 className="text-white display-1"> THE GENERICS</h1>
                <Nav className="d-flex flex-row fw-bold">
                    <Nav.Link href="https://www.youtube.com" >
                        <img width="30px" src="/images/youtube-logo.jpg" alt="youtube link" />
                    </Nav.Link>
                    <Nav.Link href="https://spotify.com" >
                        <img width="30px" src="/images/Spotify Logo.png" alt="spotify link" />
                    </Nav.Link>
                    <Nav.Link href="https://facebook.com" >
                        <img width="30px" src="/images/Facebook Logo.png" alt="facebook link" />
                    </Nav.Link>
                </Nav>
            </Container>

        </footer>
    )

}

export default Footer;