import React from "react";
import Generate from "../assets/Magic.svg"
import imageStore from "../stores/imageStore";
import Colors from "./Colors";
import Resolution from "./Resolution";
import Quality from "./Quality";
import { styles } from "../styles";
import LoadingSpinner from "./LoadingSpinner";

const Form = () => {

    const handleSubmit = imageStore((state) => state.handleSubmit)
    const prompt = imageStore((state) => state.form.prompt)
    const handleChange = imageStore((state) => state.handleChange)
    const handleRandomPrompt = imageStore((state) => state.handleRandomPrompt)
    const loading = imageStore((state) => state.loading)
   

    return (
        
        <div className="md:w-[45%]">
            <form className="flex flex-col gap-8" onSubmit={(e)=>handleSubmit(e)}>
                <label className="flex flex-col">
                <span className={`${styles.listHeadText}`}>Prompt</span>
                <textarea 
                placeholder="Enter your prompt"
                type="text"
                name="prompt"
                value={prompt}
                onChange={(e)=>handleChange(e)}
                className="md:py-2 h-[80px] py-2 px-4
                rounded-lg border-solid border-2 border-dark-grey-100
                text-white-100 text-sm
                font-light bg-grey-black 
                placeholder:text-grey-100 placeholder:text-sm"
                />
                </label>
                <button
                className={` ${loading && "opacity-40 cursor-not-allowed"} text-white-100 text-sm 
                rounded-lg bg-violet-100 w-[35%] 
                flex items-center justify-center
                gap-4 py-[10px]`}
                onClick={(e)=>handleRandomPrompt(e)}>
                Surprise Me
                </button>
             
                <>
                <Colors />
                <Resolution />
                <Quality />
                </>


                {loading === false

                ?

                <button 
                type="submit"
                className="text-white-100 text-md 
                rounded-lg bg-violet-100 
                flex items-center justify-center 
                gap-4 py-[10px]"
                >
                <img 
                className="bg-transparent" 
                src={Generate} 
                alt="generate image" />
                Generate Image
                </button>

                :

                <button 
                type="submit"
                className="flex items-center justify-center 
                bg-violet-100 text-white font-bold 
                py-2 px-4 rounded opacity-40
                cursor-not-allowed"   
                >
                
                <LoadingSpinner />
                </button>
                }  
            </form>
           

          
        </div>
    )
}

export default Form;