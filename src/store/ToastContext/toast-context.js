import { createContext } from 'react';

const ToastContext = createContext(
    {
        toasts: [], 
        addToast: (toast)=>{},
        removeToast: (id)=>{}, 
    });

export default ToastContext;

