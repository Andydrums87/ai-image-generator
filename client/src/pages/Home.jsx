import React, { useState } from "react";
import Google from "../assets/google-color.svg"
import Facebook from "../assets/facebook-round-color-icon.svg"
import LoadingSpinner from "../components/LoadingSpinner";


const Home = () => {

    const [loading, setLoading] = useState(false)

    const handleButtonClick = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
      }


    return (
        <div 
        className="md:py-10 md:w-[80%] w-[100%] 
        h-[50vh] flex flex-col 
        items-center justify-center gap-5">
               <h2 className="text-white-100">Sign in to continue</h2>
                <form action="https://server.ai-image-project.com/auth/google/callback">
                    <button 
                    onClick={handleButtonClick}
                    type="submit" 
                    className={`
                        ${loading 
                            && "opacity-40 cursor-not-allowed"} 
                    flex items-center justify-center gap-5 
                    text-white-100 bg-violet-100 
                    w-[300px] rounded-lg py-4`}>
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
            <p className="text-white text-sm">or</p>
            <form action="https://server.ai-image-project.com/auth/facebook/callback">
                    <button 
                    onClick={handleButtonClick}
                    type="submit" 
                    className={`
                        ${loading 
                            && "opacity-40 cursor-not-allowed"} 
                    flex items-center justify-center gap-5 
                    text-white-100 bg-violet-100 
                    w-[300px] rounded-lg py-4`}>
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
         
        </div>
 
    )
}

export default Home;