import React,{useState} from "react";
import { createBrowserRouter , RouterProvider} from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Store from "./pages/Store/Store";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([

  {path: '/about', element: <AboutUs/> },
  {path: '/store', element:<Store/>}
]
)


function App() {

  

  return (
    <RouterProvider router={router}>
    </RouterProvider>

  );
}

export default App;
