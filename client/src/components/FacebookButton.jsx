import React from "react";
import Facebook from "../assets/facebook-round-color-icon.svg"
import LoadingSpinner from "../components/LoadingSpinner";
import { styles } from "../styles";
import authStore from "../stores/authStore";

const FacebookButton = () => {


    const loading = authStore((state) => state.loading)
    const handleButtonClick = authStore((state) => state.handleButtonClick)

    return (
        <form action="https://server.ai-image-project.com/auth/facebook/callback">
        <button 
        id="2"
        onClick={handleButtonClick}
        type="submit" 
        className={`
            ${loading 
                && "opacity-40 cursor-not-allowed"} 
        ${styles.loginButton}`}>
        <img 
        className={`${loading ? "hidden" : "block"} h-[25px] bg-white rounded-full`}
        src={Facebook} 
        alt="google logo">
        </img>


    { loading
    ? <LoadingSpinner />
    :  "Login with Facebook"
    }
    </button>
    
</form>
    )
}

export default FacebookButton;