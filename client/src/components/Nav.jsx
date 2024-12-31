import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { styles } from "../styles"
import { navItems } from "../constants/index"
import { useNavigate } from "react-router-dom";
import Logout from "../assets/signout.svg"
import imageStore from "../stores/imageStore";
import authStore from "../stores/authStore";
import Bars from "../assets/bars.svg"
import CloseButton from "./CloseButton"
import Avatar from "./Avatar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import LoadingSpinner from "./LoadingSpinner";
import Toast from "../components/Toast/Toast"



const Nav = ({ nav, handleNav }) => {

    const handleLogout = authStore((state) => state.handleLogout)
    const reset = imageStore((state) => state.initialState)
    const isOpen = imageStore((state) => state.isOpen)
    const user = authStore((state) => state.user)
    const isLoggedIn= authStore((state) => state.isLoggedIn)
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

        const logout = async () => {
            setLoading(true)
            handleLogout()
            reset()
           
            navigate("/")
            toast.success("Logged out")
            setLoading(false)
            }

    return (
        <div className="z-10 absolute md:px-3 md:w-[6%] 
        min-h-screen md:border-r-2 
        border-grey-black md:py-10" 
        >
            <Toast />
        <div>
        <div className="h-full hidden md:flex flex-col items-center justify-center gap-3">
            <img src={Logo} alt="logo" className="mb-5" />
                {navItems.map((item) => {
                return (
                    <NavLink 
                    key={item.id} 
                    to={`${item.to}`} 
                    className={({ isActive }) =>
                       isActive ? `${styles.activeLink}` : `${styles.normalLink}`
                    }
                    >
                    <img src={item.image} alt="" className="bg-transparent h-[20px]" />   
                    </NavLink>
                    )
                    })}  
           {isLoggedIn ? 
                <button 
                className="h-full w-full rounded-md 
                text-xs flex 
                items-center justify-center w-[80%] mt-10" 
                onClick={logout}
                >

                {loading 
                ? <LoadingSpinner /> 
                : <img 
                src={Logout} 
                alt="logout btn" 
                />}

                </button>

                :

               
                <a className="h-full w-full rounded-md 
                text-xs flex 
                items-center justify-center w-[80%] mt-10"  href="https://ai-image-generator-backend-wew8.onrender.com/auth/google/callback?scope=email"><img 
                src={Logout} 
                alt="logout btn" 
                /></a>
            
                }   
                {isLoggedIn 
                ? <Avatar />
                : ""
                }
               
            </div>
         
        </div>
{/* Mobile Navigation  */}

      <nav className="md:hidden flex 
      justify-between 
      px-5 py-5 items-center 
      border-grey-black">
      <img 
      src={Logo} 
      alt="Logo" 
      className="h-[20px]"
      />
      {!nav &&
      <img 
      onClick={handleNav} 
      src={Bars} 
      alt="menu" 
      className="fixed bg-violet-100 
      right-5 p-2 rounded-md cursor-pointer" />}
      </nav>
      <div onClick={handleNav} className='md:hidden'>
        <div
        className={`${nav ? "max-h-screen duration-500 ease-in-out right-0" : "-right-80 ease-in-out duration-500 sm:hidden"} fixed top-0 bg-primary w-[55%]`}>
        <div className="md:flex flex flex-col gap-5 items-start w-[100%] px-5 h-[100vh]">

            {nav && 
            
            <CloseButton />

            }
            
            <ul className="flex flex-col gap-5 w-[100%] mt-[100px]">

            {navItems.map((item, index) => {
                return (
                <li key={index} >
                 <NavLink 
                 
                 to={`${item.to}`} 
                className={({ isActive }) =>
                   isActive ? `${styles.activeLink}` : `${styles.normalLink}` 
                }
                >
                    <>
                    <img src={item.image} alt="" />
                    {item.text}
                    </>
                
                </NavLink>
            </li>
            )
            })}  

            {isLoggedIn ? 

                <button 
                className="h-full mt-20 w-full rounded-md 
                text-xs py-3 pl-2 flex 
                items-center w-[80%] gap-2 text-white" 
                onClick={() => {handleLogout(); reset()}}
                >
                <img 
                src={Logout} 
                alt="logout btn" 
                />Logout
                </button>

                :

                <a 
                className="h-full mt-20 w-full rounded-md 
                text-xs py-3 pl-2 flex 
                items-center w-[80%] gap-2 text-white" 
                href="https://ai-image-generator-backend-wew8.onrender.com/auth/google"> 
                <img 
                src={Logout} 
                alt="logout btn" 
                />
                Sign In
                </a>
                }  
                   
            </ul>

            <img src={user?.avatar} className={`${isLoggedIn ? "flex" : "hidden"} h-[40px] w-[40px] rounded-full`} alt="user avatar" />   
        </div>
       
    </div>

    </div>
     </div>
    )
}

export default Nav;
