import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./store/CartContext/CartProvider";
import ToastProvider from "./store/ToastContext/ToastProvider";
import AuthProvider from "./store/AuthContext/AuthProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import AuthContext from "./store/AuthContext/auth-context";

function App() {

  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            <MainLayout />
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();
  
  const authCtx = useContext(AuthContext);






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
          <Route
            path="/store"
            element={
              authCtx.isLoggedIn ? (
                <Store />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer enableSocials={isStore || isAbout} />
    </>
  );
};

export default App;
