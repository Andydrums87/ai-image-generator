import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';


const Scroll = ({ children, images, total, fetchMoreImages, loader }) => {


    return (
      <div>
         <InfiniteScroll
         dataLength={images}
         useWindow={false}
         next={fetchMoreImages}
         hasMore={total === images?.length ? false : true}
         endMessage={<p className={`${images?.length === 0 ? "hidden" : "block"} text-white`}>You have come to the end</p>}
         loader={loader}
         >
            
            {children}

        </InfiniteScroll>
      </div>
    )
}

export default Scroll;