import React, { useEffect } from "react";
import authStore from "../stores/authStore";
import CloseButton from "./CloseButton";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

const SignInModal = () => {

    const isOpen = authStore((state) => state.isOpen)
    const handleClose = authStore((state) => state.handleClose)
 
    return (
        <div className={`${ 
            isOpen === true 
            ? 
            "fixed top-[25%] md:w-[50%] md:left-[25%] w-[91%] flex flex-col gap-3 z-20 h-[40%] md:h-[50%] text-white-100 text-sm bg-grey-black rounded-lg p-5" 
            : 
            "hidden" 
            }`}>
            <h2 className="font-bold">Sign In</h2>
            <p className="flex-1">Please sign in to access all feature</p>
           <>
           <CloseButton handleClose={handleClose} />
           <GoogleButton />
           <FacebookButton />
           </>
         
        </div>
    )
}

export default SignInModal;