import React from "react";
import { resolutions } from "../constants";
import imageStore from "../stores/imageStore";
import "../index.css"
import { styles } from "../styles"


const Resolution = () => {

    const handleSize = imageStore((state) => state.handleSize)
    const size = imageStore((state) => state.form.size)
    
    return (
      <>
        <label className="flex flex-col">
          <span className={`${styles.listHeadText}`}>Resolution</span>
            <div className="flex gap-4">
              {resolutions.map((res, i) => (
                <div key={i} className="inline-flex">
                  <input
                  id={res}
                  type="radio"
                  onChange={(e)=>{handleSize(e)}}
                  value={res}
                  name="size"
                  checked={size === res}
                  className="hidden"
                  />
          <label htmlFor={res} className={`${styles.formLabel}`}>
              {res}
          </label>
        </div>
        ))}
        </div>
        </label>
      </>
    )
}

export default Resolution;