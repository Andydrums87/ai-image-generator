import React from "react";
import ImagePlaceholder from "../../assets/image-placeholder.svg"
import { styles } from "../../styles";
import Search from "../Search";

const SkeletonCard = ({ amount }) => {

    return (
        <>
     <Search />
        <div className={`md:w-[100%] w-full min-h-[100vh]`}>
              <div className={`${styles.resultsContainer}`}>
              {Array(amount)
                .fill(1)
                .map((index) => (
                <div  index={index} className="inline-block w-full mr-5 relative">
                <img src={ImagePlaceholder} alt="/" className="animate-pulse bg-grey-black mb-5 md:h-[300px] h-[250px] w-full rounded-md" />
                <div className="flex gap-2 w-full">
                <div className="rounded-full w-4 h-4 bg-dark-grey-100 animate-pulse"></div>
                <p className="h-4  bg-dark-grey-100 rounded-full animate-pulse flex-1"></p>
                <div className="h-4 w-[20px] rounded-lg animate-pulse bg-dark-grey-100 mb-5"></div>
                </div>
                </div>
        ))}
        </div>
        </div>
       
        </>



      
        
    )
}

export default SkeletonCard;