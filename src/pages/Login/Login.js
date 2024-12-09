import React, { useContext, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import AuthContext from "../../store/AuthContext/auth-context";
import ToastNotification from "../../Components/ToastNotification/ToastNotification";

import 'bootstrap/dist/css/bootstrap.min.css';
import ToastContext from "../../store/ToastContext/toast-context";
import { useNavigate } from "react-router-dom";


const Login = (props) => {


  const authCtx = useContext(AuthContext);
  const toastCtx = useContext(ToastContext);
  const [isLogin,setIsLogin] = useState(authCtx.isLoggedIn);

  const navigate = useNavigate();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = event.target.email.value;
    const enteredPass = event.target.password.value;
    const enteredUserName = event.target.userName.value;


  


    let url;
    if (!isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIRE_BASE_API_KEY}`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIRE_BASE_API_KEY}`
    }


    try {
      const res = await fetch(url,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPass,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error.message);
      }


      console.log(data.idToken)
      localStorage.setItem("token", data.idToken);
      const successMessage = isLogin ? "Login Success" : " Sign Up Success";
      
      toastCtx.addToast(successMessage);
      authCtx.setIsLoggedIn(true);// if u sign up or login the isLogged in should be true
      authCtx.setEmail(enteredEmail);
      authCtx.setUserName(enteredUserName);

      navigate('/store');


    } catch (error) {
      // alert(error)
      const failureMessage = isLogin ? "Login Failure" : " Sign Up Failure";
      console.log(error);
      toastCtx.addToast(failureMessage, "danger");
    }
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };




  return (
    <Container className="w-50 h-50 bg-light p-5">
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-4" controlId="userName">
          <Form.Label>User Name :</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email :</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password :</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" required />
        </Form.Group>
        <Button variant="dark" type="submit" className="m-4 ">
          {isLogin ? "Login" : "Sign up"}
        </Button>
        <Button variant="dark" type="button" className="m-4" onClick={switchAuthModeHandler}>
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </Button>
      </Form>
      <ToastNotification />
    </Container>
  )



}


export default Login;