import React,{useState} from "react";

import CartContext from "./cart-context";

const CartProvider =(props)=>{

    const [show, setShow] = useState(false);
    const [cart,setCart] = useState([]);

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const cartContext= {
        showCart: show,
        setShowCart: setShow,
        cart: cart,
        setCart: setCart,
        removeItem: removeItem,
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;

