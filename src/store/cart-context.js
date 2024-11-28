import React from "react";

const CartContext= React.createContext({
    showCart: true,
    setShowCart: null,
});

export default CartContext;