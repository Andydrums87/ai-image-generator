import React from "react";
import AuthButtons from "../components/AuthButtons"


const Login = () => {

    return (
        <div className="md:py-10 md:w-[80%] w-[100%] h-[50vh] flex flex-col items-center justify-center gap-5">
            <h2 className="text-white-100">Sign in to continue</h2>
            <div className="md:w-[40%]">
               <AuthButtons />
            </div>
        </div>
 
    )
}

export default Login;