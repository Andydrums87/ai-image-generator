import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { styles } from "../styles";
import authStore from "../stores/authStore";
import { signInButtons } from "../constants/index"



const AuthButtons = () => {

    const loading = authStore((state) => state.loading)
    const handleButtonClick = authStore((state) => state.handleButtonClick)

    return (
      <>
        {signInButtons.map((btn, i) => (
            <div key={i} className="mb-5" tabIndex={0}>
            <form action={btn.url}>
            <button 
            id={btn.id}
            type="submit" 
            className={`
            ${styles.loginButton}`}>
            <img 
            className="max-h-[25px] bg-white rounded-full px-1 py-1"
            src={btn.image} 
            alt={btn.alt}>
            </img>
            {btn.text}
            </button>
            </form>
            </div>
        ))}
      </>
           
      
   
      
    )
}

export default AuthButtons;
// ${!loading ? "hidden" : "block"}
// ${!loading 
//     && "opacity-40 cursor-not-allowed px-40"} 

    {/* { !loading
        ? <LoadingSpinner />
        :  <p>{btn.text}</p>
        } */}