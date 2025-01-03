import React, { useState } from "react";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";


const Home = () => {

    const [loading, setLoading] = useState(false)
  
    
    const handleButtonClick = async (e) => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 3000);
      }


    return (
        <div 
        className="md:py-10 md:w-[80%] w-[100%] 
        h-[50vh] flex flex-col 
        items-center justify-center gap-5">
               <h2 className="text-white-100">Sign in to continue</h2>
               <GoogleButton handleButtonClick={handleButtonClick} loading={loading}/>
            <p className="text-white text-sm">or</p>
            <FacebookButton handleButtonClick={handleButtonClick} loading={loading} />
           
         
        </div>
 
    )
}

export default Home;