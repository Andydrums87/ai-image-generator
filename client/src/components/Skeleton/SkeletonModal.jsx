import React from "react";
import ImagePlaceholder from "../../assets/image-placeholder.svg"
import CloseButton from "../CloseButton";
import imageStore from "../../stores/imageStore";

const SkeletonModal = () => {

    const handleClose = imageStore((state) => state.handleClose)
    return (

        <div className="text-white bg-primary
        z-10 fixed top-10 justify-center items-center
        md:left-40 w-[90%] md:w-[75%] p-5 flex flex-col md:flex-row
          rounded-lg">
             <div className="w-full animate-pulse mr-2">
            <img src={ImagePlaceholder} alt="image placeholder" className="bg-grey-black w-full h-[200px] md:h-[400px] rounded-md" />
            </div>
            <div className="w-full text-left flex-col flex mt-5">
            
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-4"></p>
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-10"></p>
               
               
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-4"></p>
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-10"></p>
               
              
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-4"></p>
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-10"></p>
          
          
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-4"></p>
               <p className="h-3 bg-grey-black rounded-full animate-pulse mb-10"></p>
            
            
               <button className="w-[30%] animate-pulse flex items-center text-xs justify-center gap-1 
                text-white-100 bg-grey-black
                py-5 px-15 rounded-lg"></button>
           </div>
              
           <button className="absolute top-0 right-10" onClick={handleClose}>
               <CloseButton />
           </button>
        </div>

    )
}

export default SkeletonModal;