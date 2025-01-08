import React from "react";
import Box from "../assets/Box-shape.png"
import imageStore from "../stores/imageStore";
import { motion } from 'framer-motion';
import Download from "./Download";


const GeneratedImage = () => {

    const loading = imageStore((state) => state.loading)
    const images = imageStore((state) => state.images)

   
    return (
        <div className="md:w-[50%] mt-20 md:mt-0 
        h-[500px] bg-grey-black flex flex-col 
        justify-center items-center relative">
            {loading ?
            <>
              <motion.img 
                 animate={{ rotate: [360, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 src={Box} 
                 alt="box"
                 className="h-[40%] bg-transparent
                 z-1 "
                  />

                 <span className="bg-transparent text-white">Just thinking...this may take a minute</span>
                </>
                  :
                  <img src={Box} alt="" className="h-[40%] bg-transparent absolute
                  z-999" />
                }
           
                    {!images ? "" : 
                    <>
                    <img 
                    src={ images.image_url || images.imgSrc } 
                    alt="ai image" 
                    className="z-0 w-[100%] rounded-md h-[100%]
                    border-4 border-grey-black mb-10" />
                    <div className="absolute bottom-0 left-0">
                        <Download img={images.imgSrc}/>
                    </div>
                    </>
                     

                    }
           

        </div>

    )
}

export default GeneratedImage;