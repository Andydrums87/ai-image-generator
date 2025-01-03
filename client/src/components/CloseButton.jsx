import React from "react";
import Close from "../assets/Close-1.svg"

const CloseButton = () => {
    return (
        <img src={Close} 
        alt="close" 
        className="p-1 mb-10 bg-grey-100
        rounded-md mt-4 cursor-pointer 
        fixed pointer-events-auto" 
        />
    )
}

export default CloseButton;