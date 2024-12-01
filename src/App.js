import React,{useState} from "react";
import { createBrowserRouter , RouterProvider} from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([

  {path: '/about', element: <AboutUs/> },
  {path: '/store', element:<Store/>},
  {path: "/home", element: <Home /> },

]
)


function App() {

  

  return (
    <RouterProvider router={router}>
    </RouterProvider>

  );
}

export default App;
