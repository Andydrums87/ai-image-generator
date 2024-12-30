import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
    return (
        <div className="w-full flex justify-center">
        <ClipLoader
        color={"white"}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="bg-transparent" 
        />
        </div>
    
    )
}

export default LoadingSpinner;