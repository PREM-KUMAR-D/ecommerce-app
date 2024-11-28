import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Music from "./Components/Music/Music";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";




function App() {

  

  return (
    <CartProvider>
      <Header></Header>
      <Music></Music>
      <Cart ></Cart>
      <Footer></Footer>

    </CartProvider>
  );
}

export default App;
