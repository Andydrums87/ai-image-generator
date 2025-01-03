import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import Google from "../assets/google-color.svg"
import { styles } from "../styles";


const GoogleButton = ({ handleButtonClick, loading}) => {

    return (
        <form action="https://server.ai-image-project.com/auth/google/callback">
        <button 
        id="1"
        onClick={(e) => handleButtonClick(e)}
        type="submit" 
        className={`
            ${loading 
                && "opacity-40 cursor-not-allowed"} 
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