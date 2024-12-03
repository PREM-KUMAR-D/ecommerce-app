import React from "react";

const CartContext= React.createContext({
    showCart: true,
    setShowCart: null,
    cart: [],
    setCart: ()=>{},
    removeItem: (id)=>{},
});

export default CartContext;