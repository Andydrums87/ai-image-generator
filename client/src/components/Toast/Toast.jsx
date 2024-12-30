import React from "react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "./toast.css"


const Toast = () => {
    return (
        <ToastContainer 
        autoClose={2000}
        icon={false}
        className="toast"
        theme="light"
        toastClassName="toast__wrapper"
        progressClassName="toast__progress" 
        bodyClassName="toast__body"
        position="top-center"
        
        />
    )
}

export default Toast;
