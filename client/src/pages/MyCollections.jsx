import React, { useEffect } from "react";
import imageStore from "../stores/imageStore";
import Modal from "../components/Modal";
import ImageCard from "../components/ImageCard";
import { styles } from "../styles"
import Toast from "../components/Toast/Toast";
import Empty from "../components/Empty";

const MyCollections = () => {

    const fetchCollections = imageStore((state) => state.fetchCollections)
    const collections = imageStore((state) => state.collections)
  

    useEffect(() => {
       fetchCollections()
      }, [])

    return (
        <div className="gap-12 px-5 max-w-[100%] md:w-[95%] min-h-screen">
            <Modal />  
            <Toast />
            <h1 className="text-white mb-5">My Collections</h1>
            {collections?.length === 0 ? <Empty message={"Start bookmarking images to add to your collection"} /> : "" }
            <div className={`${styles.resultsContainer}`}>
            {collections && collections.map((img, index) => {
                return (
                    <ul key={index}>
                        <li>
                        <ImageCard 
                        img={img} 
                        id={img.originalId} 
                        index={index}  
                        />
                        </li>
                    </ul>
          )     
          })}
        </div>
    </div>
    )
}

export default MyCollections;

