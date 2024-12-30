import React from "react";
import imageStore from "../stores/imageStore";
import { styles } from "../styles";
import CloseButton from "./CloseButton";
import { AsyncImage } from "loadable-image"
import SkeletonModal from "./Skeleton/SkeletonModal";
import Download from "./Download";

const Modal = ({id, img }) => {

    const isOpen = imageStore((state) => state.isOpen)
    const selectedImage = imageStore((state) => state.selectedImage)
    const handleClose = imageStore((state) => state.handleClose)
    const loading = imageStore((state) => state.loading)

    const date = new Date(selectedImage?.image?.createdAt)
 
    return (
        <>
            <div className="flex justify-center">
            {isOpen === true ? 
            <div className="text-white bg-primary 
            z-10 fixed top-10 
            md:left-40 w-[90%] md:w-[75%] p-5 flex flex-col md:flex-row
            justify-content items-center gap-5 rounded-lg">
              
                 {loading ? <SkeletonModal /> : 
                 <>
             
                 <AsyncImage 
                 id={selectedImage?.image?._id || id}
                 src={selectedImage?.image?.imageUrl || img?.imageUrl}  
                 className={`${styles.imageBorder} h-[300px] md:h-[400px] md:max-w-[50%] w-[100%]`}
                 loader={<div className="w-full h-full bg-grey-black animate-pulse"></div>}
                 />  
                   <ul>
                   <li className={`flex flex-col ${styles.listSubText}`}>
                   <span className={`${styles.listHeadText}`}>Prompt Details</span>
                   {selectedImage?.image?.prompt || img?.prompt}
                   </li>
                   <li className={`flex flex-col ${styles.listSubText}`}>
                   <span className={`${styles.listHeadText}`}>Created on</span>
                   {date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}
                   </li>
                   <li className={`flex flex-col w-[80%] ${styles.listSubText}`}>
                   <span className={`${styles.listHeadText}`}>Resoution</span>
                   {selectedImage?.image?.size || undefined }
                   </li>
                   <li className={`flex flex-col ${styles.listSubText}`}>
                   <span className={`${styles.listHeadText}`}>Style</span>
                   {selectedImage?.image?.style || undefined }
                   </li>
                   <li>
                   <Download img={selectedImage?.image?.imageUrl}/>
                   </li>
                </ul>
               
                 </>
                  }  
             
           <button className="absolute top-0 right-10" onClick={handleClose}>
               <CloseButton />
           </button>
        </div>

           :
   
           <div className="hidden"></div>

           }
   
             
           </div>
              
        </>
    )
}

export default Modal;