import React from "react";

const AuthContext = React.createContext({
    email: "",
    setEmail: ()=>{},
    userName: "",
    setUserName: ()=>{},
    isLoggedIn: false,
    setIsLoggedIn: ()=>{},
})


export default AuthContext;