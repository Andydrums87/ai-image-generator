import React from "react";
import imageStore from "../stores/imageStore";
import { colors } from "../constants/index"
import { styles } from "../styles"

const Colors = () => {

    const formColors = imageStore((state) => state.form.colors)
    const handleColors = imageStore((state) => state.handleColors)

    return (

        <label className="flex flex-col">
        <span className={`${styles.listHeadText}`}>Colors</span>
          <div className="flex gap-4">
            {colors.map((c, i) => (
              <div key={i} className="inline-flex">
                <input
                id={c}
                type="radio"
                onChange={(e)=>{handleColors(e)}}
                value={c}
                name="colors"
                checked={formColors === c}
                className="hidden"
                />
        <label htmlFor={c} style={{backgroundColor: `${c}`}} className='active:border-2 active:border-blue-100 w-8 h-8 rounded-full'>
      
        </label>
      </div>
      ))}
           <input className="flex text-grey-100 text-center bg-transparent border-2 border-grey-black items-center justify-center focus:border-2 focus:border-blue-100 w-8 h-8 rounded-full" />
      </div>
      </label>

    )
}

export default Colors;