import React from "react";
import DefaultAvatar from "../assets/default-avatar.svg"

const UserInfo = ({ img }) => {
    return (
        <div className="flex items-center gap-2 my-5 w-[100%] h-full">
            <img 
            className="rounded-full h-[20px] w-[20px]" 
            src={img.author?.avatar || DefaultAvatar} 
            alt="user profile picture" 
            />
            <p className="text-white text-xs flex-1">{img.author?.name}</p>
        </div>
    )
}

export default UserInfo;
