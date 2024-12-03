import React, { useContext } from "react";
import { Toast } from "react-bootstrap";
import ToastContext from "../../store/ToastContext/toast-context";

const ToastNotification = () => {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          delay={3000}
          autohide
          bg={toast.variant}
        >
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default ToastNotification;
