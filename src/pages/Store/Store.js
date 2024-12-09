import React, { useContext, useEffect } from "react";
import Music from "../../Components/Music/Music";
import Cart from "../../Components/Cart/Cart";
import { Button, Row, Col } from "react-bootstrap";
import CartContext from "../../store/CartContext/cart-context";



import 'bootstrap/dist/css/bootstrap.min.css';
import "./Store.css";
import ToastNotification from "../../Components/ToastNotification/ToastNotification";





const Store = (props) => {

    const cartCtx = useContext(CartContext);
    


    const { cart: items } = cartCtx;
    const email = localStorage.getItem("email");
    const fireBaseUrl = process.env.REACT_APP_FIRE_BASE_URL;
    


    useEffect(() => {

    
        const fetchCartData = async () => {
            if (!email || !fireBaseUrl) return;
    
            try {
                const res = await fetch(`${fireBaseUrl}/cart-${email.replace('.', '_')}.json`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
    
                if (!res.ok) {
                    throw new Error("Failed to fetch cart data.");
                }
    
                const data = await res.json();
                
                cartCtx.setCart(data || []);
            } catch (error) {
                console.error("Error fetching cart data:", error.message);
            }
        };
    
        fetchCartData();
    }, [email, fireBaseUrl]);


    useEffect(() => {
        if (!email) return;

        const sendCartData = async () => {
            try {
                const res = await fetch(`${fireBaseUrl}/cart-${email.replace('.', '_')}.json`, {
                    method: "PUT",
                    body: JSON.stringify(items),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to update the cart.");
                }
            } catch (error) {
                console.error("Error updating cart:", error.message);
            }
        };

        const debounceTimer = setTimeout(sendCartData, 500); 
        return () => clearTimeout(debounceTimer); 
    }, [items, email, fireBaseUrl]);


    return (


        <section id="store">
            <ToastNotification />
            <Music></Music>
            <Cart ></Cart>
            <Row className="justify-content-center mb-3">
                <Col className="d-flex justify-content-center">
                    <Button className="cart-btn" onClick={() => cartCtx.setShowCart(true)}>See the Cart</Button>
                </Col>
            </Row>
        </section>


    )


}

export default Store;