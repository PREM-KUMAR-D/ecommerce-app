import React from "react";
import Music from "../../Components/Music/Music";
import Cart from "../../Components/Cart/Cart";
import CartProvider from "../../store/CartProvider";




const Store = (props)=>{

    return (


        <section id="store">
            <Music></Music>
            <Cart ></Cart>
        </section>

        
    )


}

export default Store;