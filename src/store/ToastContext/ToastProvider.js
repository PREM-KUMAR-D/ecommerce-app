import React,{useState} from "react";
import ToastContext from "./toast-context";

const ToastProvider = (props)=>{


    const [toasts, setToasts] = useState([]);

    const addToast = (message, variant = "success") => {
        const newToast = {
          id: Date.now(),
          message,
          variant,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
      };
    
      const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      };
    

    const toastContext = {
        toasts: toasts, 
        addToast: addToast,
        removeToast: removeToast, 
        
    }


    return (
        <ToastContext.Provider value={toastContext}>
            {props.children}
        </ToastContext.Provider>
    )

}

export default ToastProvider;
