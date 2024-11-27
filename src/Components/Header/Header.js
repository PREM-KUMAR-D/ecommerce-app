import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";




const Header = (props) => {

    return (
        <Container>
            <header className="container">
                <ul >
                    <li> 
                        <a href="./index.html">HOME</a>
                    </li>
                    <li>
                        <a href="./index.hmtl">STORE</a>
                    </li>
                    <li>
                        <a href="./about.html">ABOUT</a>
                    </li>
                    <a href="#cart" >cart<span>0</span></a>
                </ul>
                <h1>The Generics</h1>

            </header>

        </Container>
    )
}

export default Header;
