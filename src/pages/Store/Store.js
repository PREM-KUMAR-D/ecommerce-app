import React,{useContext} from "react";
import Music from "../../Components/Music/Music";
import Cart from "../../Components/Cart/Cart";
import { Button , Row, Col } from "react-bootstrap";
import CartContext from "../../store/cart-context";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./Store.css";




const Store = (props) => {

    const cartCtx = useContext(CartContext);

    return (


        <section id="store">
            <Music></Music>
            <Cart ></Cart>
            <Row className="justify-content-center mb-3">
                <Col className="d-flex justify-content-center">
                    <Button className="cart-btn" onClick={()=>cartCtx.setShowCart(true)}>See the Cart</Button>
                </Col>
            </Row>
        </section>


    )


}

export default Store;