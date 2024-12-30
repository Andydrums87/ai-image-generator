import React, { useState } from "react";
import { AsyncImage } from "loadable-image"
import { styles } from "../styles"
import imageStore from "../stores/imageStore";

const Image = ({ img, id }) => {


    const handleOpen = imageStore((state) => state.handleOpen)
    const handleSelectImage = imageStore((state) => state.handleSelectImage)
 

    return (
     
         <AsyncImage 
            id={id}
            src={img?.imageUrl}
            className={
                `${parseInt(img._id) % 2 === 0 
                    ? "h-[300px] md:h-[300px]" 
                    : "h-[250px] md:h-[200px]"} 
                    w-full bg-dark-grey-100 ${styles.imageBorder}
                    `}
            loader={<div className="w-full bg-grey-black animate-pulse mr-2"></div>}
            onClick={(e) => {handleSelectImage(e); handleOpen()}}
            /> 
    )
}

export default Image;