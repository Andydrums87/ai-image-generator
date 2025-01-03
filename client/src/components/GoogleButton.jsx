import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import Google from "../assets/google-color.svg"
import { styles } from "../styles";
import authStore from "../stores/authStore";



const GoogleButton = () => {

    const loading = authStore((state) => state.loading)
    const handleButtonClick = authStore((state) => state.handleButtonClick)

    return (
        <form action="https://server.ai-image-project.com/auth/google/callback">
        <button 
        id="1"
        onClick={handleButtonClick}
        type="submit" 
        className={`
            ${loading 
                && "opacity-40 cursor-not-allowed px-40"} 
        ${styles.loginButton}`}>
        <img 
        className={`${loading ? "hidden" : "block"} bg-white rounded-full px-1 py-1`}
        src={Google} 
        alt="google logo">
        </img>


    { loading
    ? <LoadingSpinner />
    :  "Login with Google"
    }
    </button>
</form>
    )
}

export default GoogleButton;