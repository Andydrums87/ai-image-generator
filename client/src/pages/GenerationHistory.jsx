import React, { useEffect } from "react";
import imageStore from "../stores/imageStore";
import GeneratedInfo from "../components/GeneratedInfo";
import Image from "../components/Image";
import Modal from "../components/Modal";
import Skeleton from "../components/Skeleton/Skeleton";
import Scroll from "../components/Scroll";


const GenerationHistory = () => {

    const fetchImages = imageStore((state) => state.fetchImages)
    const images = imageStore((state) => state.userImages)
    const fetchMoreImages = imageStore((state) => state.fetchMoreUserImages)
    const total = imageStore((state) => state.total)

    useEffect(()=> {
        fetchImages()
    }, [])

    const loader = <Skeleton />
    
    return (
     <div className="md:flex min-h-[100vh]">
        
     <div className="w-full h-full px-10">
       <h1 className="text-white-100 mb-8">Generation History</h1>
       <Modal />
       {images?.length === 0 ? <Empty  message={"Start creating images to view generated history"} /> : "" }
           <Scroll 
           images={images} 
           fetchMoreImages={fetchMoreImages} 
           total={total}
           loader={loader}
           >
           {images && images.map((img, index) => (
            <div key={index} className={`md:flex md:w-[90%] w-[100%] border-b-2 border-dark-grey-100 py-5 gap-10`}>
                 <div className="md:w-[40%]">
                   <Image 
                   img={img} 
                   index={index} 
                   id={img._id}
                   />
                    </div>
                   <GeneratedInfo 
                   img={img} 
                   index={index} 
                   />
            </div>
               ))}
           </Scroll>
        </div>
    </div>
       

    )
}

export default GenerationHistory;