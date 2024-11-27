import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";




const Header = (props) => {

    return (
      
            <header className="bg-secondary times-bold">
                <NavBar></NavBar>
                <Container className="text-center">
                    <h1 className="text-white display-1"> THE GENERICS</h1>
                </Container>
            </header>
        
    )
}

export default Header;
