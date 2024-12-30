import React, { useState, useEffect } from "react";
import Bookmark from "../assets/bookmark.svg";
import ClipLoader from "react-spinners/ClipLoader";
import imageStore from "../stores/imageStore";
import authStore from "../stores/authStore";
import { toast } from "react-toastify";

const BookmarkImage = ({ img, id }) => {

    const images = imageStore((state) => state.allImages)
    const collections = imageStore((state) => state.collections)
    const addImage = imageStore((state) => state.addImage)
    const deleteImage = imageStore((state) => state.deleteImage)
    const isLoggedIn = authStore((state) => state.isLoggedIn)

    const [isBookmarked, setBookmarked] = useState(false)
    const [collectionId, setCollectionId] = useState([])
    const [imageId, setImageId] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    setImageId(images?.map(img => img._id))
    setCollectionId(collections?.map(col => col.originalId))
    }, [])

    const bookmark = async (e) => {
        setLoading(true)
        if(!isLoggedIn) {
            toast.success("please sign in")
            setLoading(false)
            return
        }
        setTimeout(() => {
        setLoading(false)
        setBookmarked(true)
         }, 2000)
    }

  const unBookmark = async (e) => {
    setLoading(true)
    if(!isLoggedIn) {
        toast.success("please sign in")
        setLoading(false)
        return
    }
    setTimeout(() => {
        setLoading(false)
        setBookmarked(false);
    }, 2000)

   
   
  }
    return (          
<>
{loading 
            
            ?
        
            <ClipLoader
                color={"white"}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="bg-primary " 
                />

                :
<>

                {collectionId?.includes(img._id) || collectionId?.includes(img.originalId)

                    ?  
                    
                    <img
                    src={Bookmark} 
                    alt="delete image" 
                    id={id} 
                    onClick={(e) => { unBookmark(); deleteImage(e)}}
                    className={collectionId?.includes(img._id) || collectionId?.includes(img.originalId)
                      ? "bg-violet-100 p-1 rounded-md h-[20%]" 
                      : "bg-grey-black p-1 rounded-md h-[20%]" 
                      } 
                    />
                    : 
                    
                    <img
                    src={Bookmark} 
                    alt="add image" 
                    id={id} 
                    onClick={(e) => {bookmark(); addImage(e)}}
                    className={collectionId?.includes(id) || isBookmarked === true
                    ? "bg-violet-100 p-1 rounded-md h-[20%]" 
                    : "bg-grey-black p-1 rounded-md h-[20%]"
                    }
                    />
                    
                    } 
                    
                    </>
            }

      </>
       
    )
}

export default BookmarkImage;