import React from "react";
import Image from "./Image";
import UserInfo from "./UserInfo";
import imageStore from "../stores/imageStore";
import BookmarkImage from "./BookmarkImage";


const ImageCard = ({ img, index, id }) => {

    const isOpen = imageStore((state) => state.isOpen)

    return (
        <>
        <div className={`${
            isOpen 
            ? "blur-sm" 
            : "blur-none" } 
            inline-block w-full h-full relative"
            `}>
                <Image img={img} id={id}  />
            <div className="flex items-center justify-center">
                <UserInfo img={img} index={index} id={id} />
                <BookmarkImage img={img} index={index} id={id}/>
            </div>
        </div>

        </>
        
    )
}

export default ImageCard;