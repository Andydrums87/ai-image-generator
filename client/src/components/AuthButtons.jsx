import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { styles } from "../styles";
import authStore from "../stores/authStore";
import { signInButtons } from "../constants/index"



const AuthButtons = () => {

    // const loading = authStore((state) => state.loading)
    // const handleButtonClick = authStore((state) => state.handleButtonClick)

    const [selectedBtn, setSelectedBtn] = useState(null)

    const handleSelectBtn = (i) => {
        setSelectedBtn(i)
    }

    return (
      <>
        {signInButtons.map((btn, i) => (
            
            <form key={i} action={btn.url}>
            <button 
            id={btn.id}
            onClick={() => {handleSelectBtn(i)}}
            type="submit" 
            className={`${i === selectedBtn ? "opacity-40 bg-violet-100 cursor-not-allowed" : "bg-violet-100"} flex text-xs items-center justify-center mb-5 max-h-[55px] gap-5 text-white-100 w-[100%] md:px-0 px-20 rounded-lg py-4`}>
            <img 
            className="max-h-[25px] bg-white rounded-full px-1 py-1"
            src={btn.image} 
            alt={btn.alt}>
            </img>
            {i === selectedBtn ? <LoadingSpinner /> : <p>{btn.text}</p>}
            </button>
            </form>
          
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