import React from "react";
import imageStore from "../stores/imageStore";
import "../index.css"
import { styles } from "../styles"
import { quality } from "../constants";


const Quality = () => {

    const handleStyle = imageStore((state) => state.handleStyle)
    const style = imageStore((state) => state.form.style)

    return (

      <label className="flex flex-col">
      <span className={`${styles.listHeadText}`}>Style</span>
      <div className="flex gap-4">
          {quality.map((q, i) => (
            <div key={i} className="inline-flex">
            <input
            type="radio"
            id={q}
            onChange={(e)=>handleStyle(e)}
            value={q}
            name="style"
            checked={style=== q}
            className="hidden" />
            <label htmlFor={q} className={`${styles.formLabel}`}>
            {q[0].toUpperCase() + q.slice(1)}
            </label>
            </div>
          ))}
      
      </div>
      </label>
     


      
      
  

    )
}

export default Quality