import React from "react";
import Music from "../../Components/Music/Music";



import Cart from "../../Components/Cart/Cart";
import CartProvider from "../../store/CartProvider";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";



const Store = (props)=>{

    return (

    <CartProvider>
        <Header disableCart={false} headerButtonEnabled={false}></Header>
        <Music></Music>
        <Cart ></Cart>
        <Footer enableSocials={true}></Footer>
    </CartProvider>
    )


}

export default Store;