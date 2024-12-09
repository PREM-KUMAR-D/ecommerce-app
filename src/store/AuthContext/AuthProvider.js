import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props)=>{


    const token = localStorage.getItem("token");
    
  


    const [email,setEmail] = useState("");
    const [userName,setUserName] = useState("");
    const [isLoggedIn,setIsLoggedIn]= useState(token?true:false);



    const authContext = {
        email: email,
        setEmail: setEmail,
        userName: userName,
        setUserName: setUserName,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
    }

    return <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>


}


export default AuthProvider;
