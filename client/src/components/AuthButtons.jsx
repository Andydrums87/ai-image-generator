import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { styles } from "../styles";
import authStore from "../stores/authStore";
import { signInButtons } from "../constants/index"



const AuthButtons = () => {

    // const loading = authStore((state) => state.loading)
    const handleButtonClick = authStore((state) => state.handleButtonClick)

    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
    }

    return (
      <>
        {signInButtons.map((btn, i) => (
            <div key={i} className="mb-5">
            <form action={btn.url}>
            <button 
            id={btn.id}
            onClick={handleClick}
            type="submit" 
            className={`${loading ? "opacity-40 bg-violet-100 cursor-not-allowed" : "bg-violet-100"} flex items-center max-h-[55px] aria-checked:bg-sky-700 justify-center gap-5 text-white-100 w-[100%] px-10 rounded-lg py-4`}>
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