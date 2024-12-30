import React from "react"
import { styles } from "../styles";

const GeneratedInfo = ({ img, index }) => {

const date = new Date(img?.createdAt)

    return (
      
     <div className="w-full md:flex h-[30%] md:mt-0 mt-10 md:px-10">
                  <div className="flex flex-col md:w-[50%] mr-10 gap-2">
                <p className={`${styles.listHeadText}`}>Prompt Details</p>
                <p className={`${styles.listSubText}`}>{img.prompt}</p>
                <p className={`${styles.listHeadText}`}>Created On</p>
                <p className={`${styles.listSubText}`}>{date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</p>
           </div>
            <div className="flex flex-col gap-2">
                <p className={`${styles.listHeadText}`}>Input Resolution</p>
                <h1 className={`${styles.listSubText}`}>{img.size}</h1>
                <p className={`${styles.listHeadText}`}>Style</p>
                <h1 className={`${styles.listSubText}`}>{ img.style}</h1>
            </div>
                </div>
   
    )
}

export default GeneratedInfo;
