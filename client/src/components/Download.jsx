import React, { useState } from "react"
import { toast } from "react-toastify"
import DownloadArrow from "../assets/down arrow.svg"
import LoadingSpinner from "./LoadingSpinner"


const Download = ({img}) => {

    const [loading, setLoading] = useState(false)


    const handleDownload = async () => {
      
      setLoading(true)
      const url= img
      const name = "image"
      const data = await fetch(url)
      const blob = await data.blob()
      const urlBlob = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = urlBlob
      a.download = name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(()=> {
        toast.success("Download completed")
        setLoading(false)
      }, 1000)
    }

    return (

        <button 
        className={
            `${loading && 
                "opacity-40 cursor-not-allowed"
                } 
                flex items-center text-xs justify-center gap-1 
                text-white-100 bg-grey-black
                py-2 px-5 rounded-lg`}
        onClick={handleDownload}>
        <img 
        className={`${loading ? "hidden" : "block"}`}
        src={DownloadArrow} 
        alt="download">
        </img>

                    
        { loading
            ? <LoadingSpinner />
            :  "Download"
        }
        </button>
    )
}

export default Download;