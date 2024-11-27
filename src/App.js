import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Music from "./Components/Music/Music";



function App() {
  return (
    <div >
      <Header></Header>
      <Music></Music>

      <Footer></Footer>

    </div>
  );
}

export default App;
