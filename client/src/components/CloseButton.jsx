import React from "react";
import Close from "../assets/Close-1.svg"

const CloseButton = ({ handleClose }) => {

    return (
        <button className="absolute top-0 right-10" onClick={handleClose}>
        <img src={Close} 
        alt="close" 
        className="p-1 mb-10 bg-grey-100
        rounded-md mt-4 cursor-pointer 
        fixed pointer-events-auto" 
        />
        </button>
    )
}

export default CloseButton;