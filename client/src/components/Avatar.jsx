import React, { useEffect } from "react";
import authStore from "../stores/authStore";
import DefaultAvatar from "../assets/default-avatar.svg"

const Avatar = () => {

    const user = authStore((state) => state.user)
    
    return (
        <img src={ user?.avatar || DefaultAvatar} className="h-[35px] mt-5 w-[35px] rounded-full" alt="user avatar" /> 
    )
}

export default Avatar;