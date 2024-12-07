import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./store/CartContext/CartProvider";
import ToastProvider from "./store/ToastContext/ToastProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from "./pages/Products/Products";

function App() {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <MainLayout />
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();


  const isHome = location.pathname === "/" || location.pathname === "/home";
  const isStore = location.pathname === "/store";
  const isAbout = location.pathname === "/about";
  const isContactUs = location.pathname === "/contact-us";

  return (
    <>
      <Header
        disableCart={isContactUs || isAbout || isHome}
        headerButtonEnabled={isHome}
      />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/:productId" element={<Products/>} />
        </Routes>
      </div>

      <Footer enableSocials={isStore || isAbout} />
    </>
  );
};

export default App;
