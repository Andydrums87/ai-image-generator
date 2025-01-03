import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { styles } from "../styles";
import authStore from "../stores/authStore";
import { signInButtons } from "../constants/index"



const AuthButtons = () => {

    const loading = authStore((state) => state.loading)
    const handleButtonClick = authStore((state) => state.handleButtonClick)

    return (
        <div className="flex flex-col gap-5">
             {signInButtons.map((btn, i) => (
            <form key={i} action={btn.url}>
            <button 
            id={btn.id}
            onClick={() => handleButtonClick(e, id)}
            type="submit" 
            className={`
                ${loading 
                    && "opacity-40 cursor-not-allowed px-40"} 
            ${styles.loginButton}`}>
            <img 
            className={`${loading ? "hidden" : "block"} max-h-[25px] bg-white rounded-full px-1 py-1`}
            src={btn.image} 
            alt={btn.alt}>
            </img>
    
    
        { loading
        ? <LoadingSpinner />
        :  <p>{btn.text}</p>
        }
        </button>
    </form>
        ))}
        </div>
   
      
    )
}

export default AuthButtons;