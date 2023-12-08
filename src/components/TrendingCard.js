import * as React from "react";

const TrendingCard = ({image}) => {
  return (
    <div className="flex flex-col items-center mt-[2rem]" >
        <div className="rounded-2xl cursor-pointer overflow-hidden  " >
            <img src={image} className="hover:scale-110 duration-300 " />
        </div>

        <div className="flex items-center space-x-1 mt-4 " >
            
            <p className="font-medium" >230 Followers</p>
        </div>
    </div>
  )
}

export default TrendingCard