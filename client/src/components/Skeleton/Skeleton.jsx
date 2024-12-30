import React from "react";
import ImagePlaceholder from "../../assets/image-placeholder.svg"

const Skeleton = () => {
    return (
        <>
         <div className='md:flex md:w-[90%] w-[100%] mb-10 mt-5 gap-10'>
         <div className="md:w-[35%] animate-pulse">
            <img src={ImagePlaceholder} alt="" className="bg-grey-black w-[100%] h-[300px] rounded-md" />
            </div>
            
            <div className="flex md:flex-col flex-row">
            </div>
            <div className="flex md:flex-col gap-5 mt-5 md:w-[40%] rounded-full">
        <p className="h-4 bg-grey-black rounded-full animate-pulse w-[40%]"></p>
        <p className="h-3 bg-grey-black rounded-full animate-pulse"></p>
        <p className="h-3 bg-grey-black rounded-full animiate-pulse"></p>
        <p className="h-4 bg-grey-black rounded-full animate-pulse w-[20%]"></p>
        <p className="h-3 bg-grey-black rounded-full animate-pulse md:block hidden"></p>
        <p className="h-3 bg-grey-black rounded-full animate-pulse md:block hidden"></p>
    </div>
    <div className="flex flex-col gap-5 mt-5 md:w-[40%] rounded-full">
        <p className="h-4 bg-grey-black rounded-full animate-pulse w-[20%]"></p>
        <p className="h-3 bg-grey-black rounded-full animate-pulse"></p>
        <p className="h-3 bg-grey-black rounded-full animiate-pulse"></p>
        <p className="h-4 bg-grey-black rounded-full animate-pulse w-[20%]"></p>
        <p className="h-3 bg-grey-black rounded-full animate-pulse md:block hidden"></p>
        <p className="h-3 bg-grey-black rounded-full animate-pulse md:block hidden"></p>
    </div>
        
            </div>
       

        </>
       
    )
}

export default Skeleton;