import React, { useEffect, useState } from "react";
import imageStore from "../stores/imageStore";
import Search from "../components/Search";
import Modal from "../components/Modal";
import Scroll from "../components/Scroll";
import Toast from "../components/Toast/Toast"
import { styles } from "../styles";
import ImageCard from "../components/ImageCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
import Empty from "../components/Empty";



const Feed = () => {

    const fetchAllImages = imageStore((state) => state.fetchAllImages)
    const fetchMoreImages = imageStore((state) => state.fetchMoreImages)
    const images = imageStore((state) => state.allImages)
    const total = imageStore((state) => state.total)
    const loading = imageStore((state) => state.loading)
 
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
      setTimeout(() => {
        fetchAllImages()
      }, 500)
    }, [])

    useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }, [])

  
    
    return (
     
  <div className={`md:w-[90%] min-h-[100vh] px-5`}>
    {isLoading 
    ? 
    <SkeletonCard amount={8} /> 
    : 
        <div id="scrollable">
          <>
            <Toast />
            <Search />
            <Modal />
            {images?.length === 0 && <Empty message={"No Images Found"} />}
            <Scroll 
            images={images} 
            fetchMoreImages={fetchMoreImages} 
            total={total} 
            >
            <div className={`${styles.resultsContainer}`}>
                  {images && images.map((img, index) => {
                     return (
                        <ul key={index}>
                           <li>
                           <ImageCard 
                           img={img} 
                           id={img._id} 
                           index={index}
                           />
                           </li>
                        </ul>
                     )
                        })}
               </div>  
               {loading && <LoadingSpinner />}
            </Scroll>
          </>
        </div>
        }
  </div>
    )
}

export default Feed;