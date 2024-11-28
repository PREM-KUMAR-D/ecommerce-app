import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Music from "./Components/Music/Music";
import Cart from "./Components/Cart/Cart";




function App() {

  const [show, setShow] = useState(false);

  return (
    <div >
      <Header onSetShow={setShow}></Header>
      <Music></Music>
      <Cart onSetShow={setShow} show={show}></Cart>
      <Footer></Footer>

    </div>
  );
}

export default App;
