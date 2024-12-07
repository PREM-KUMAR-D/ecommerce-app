import React,{useContext} from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext/cart-context";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./BasicCard.module.css"

const BasicCard = (props) => {

    // {
    //     title: 'Yellow and Black Colors',
    //     price: 9.99,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    //     quantity: 1,
    //   },


    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const imageClickHandler = ()=>{
      navigate(`/products/${props.id}`);
    }
      
    const addItemHandler = () => {
        const toAddCartItem = {
          title: props.title,
          price: props.price,
          imageUrl: props.image,
          id: props.id,
          quantity: 1,
        };
      

        cartCtx.setCart((prev) => {
          const existingItemIndex = prev.findIndex(item => item.id === toAddCartItem.id);
      
          if (existingItemIndex >= 0) {

            const updatedCart = [...prev];
            updatedCart[existingItemIndex].quantity += 1;
            return updatedCart;
          } else {

            return [...prev, toAddCartItem];
          }
        });

        props.onAddToast(`${props.title} added to the cart`);
      };
      
    


    return (
        <Card className={`${classes.card} m-4`}>
            <Card.Title className="text-center times-bold">{props.title}</Card.Title>


            <div className={classes['card-img-wrapper']}
              onClick={imageClickHandler}
              role="button">
                <Card.Img variant="top" className={classes['card-img-top']} src={props.image} />
            </div>
            <Card.Body className="d-flex justify-content-between">

                <Badge bg="white" className="ms-2 fs-4" text="dark">${props.price}</Badge>

                <Button variant="primary" onClick={addItemHandler}>Add to Cart</Button>


            </Card.Body>
        </Card>
    );

}

export default BasicCard;