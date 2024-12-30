import React from "react";
import imageStore from "../stores/imageStore";
import MagGlass from "../assets/Search.svg"

const Search = () => {

    const handleSearch = imageStore((state) => state.handleSearch)
    const handleSearchChange = imageStore((state) => state.handleSearchChange)
    const keyword = imageStore((state) => state.search.keyword)
    const isOpen = imageStore((state) => state.isOpen)

    return (
        <div className={`${isOpen ? "hidden" : "relative"}`}>
        <form onSubmit={(e) => handleSearch(e)}>
            <input 
            type="text"
            className="w-full text-white border-2 bg-transparent
            rounded-md border-grey-black 
            px-5 py-2 text-left mb-10 
            placeholder-grey-100 outline-none"
            value={keyword} 
            onChange={(e) => handleSearchChange(e)}
            name="keyword"
            placeholder="Search Images by keywords"
            />
            <img 
            onClick={(e) => handleSearch(e)} 
            src={MagGlass} alt="search" 
            className="absolute top-2 right-5 cursor-pointer" 
            />
        </form>

    </div>
    )

}

export default Search;