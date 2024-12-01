import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import HeaderButtons from "../HeaderButtons/HeaderButtons";


import 'bootstrap/dist/css/bootstrap.min.css';



const Header = (props) => {

    return (
      
            <header className="bg-secondary times-bold header">
                <NavBar disableCart={props.disableCart}></NavBar>
                <Container className="text-center">
                    <h1 className="text-white display-1 p-5"> THE GENERICS</h1>
                </Container>
                {
                    props.headerButtonEnabled && <HeaderButtons/>
                }
            </header>
        
    )
}

export default Header;
