import React,{useState} from "react";

import CartContext from "./cart-context";

const CartProvider =(props)=>{

    const [show, setShow] = useState(false);

    const cartContext= {
        showCart: show,
        setShowCart: setShow,
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;

