import * as React from "react";
import TrendingCard from "./TrendingCard";
import card1Image from "../images/card1.png";
import card2Image from "../images/card2.png";
import card3Image from "../images/card3.png";


const Trending = () => {
  const images = [card1Image, card2Image, card3Image];

  return (
    <div className="w-full py-[4rem]">
      <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 items-center justify-between">
        <p className="text-[1.4rem] font-bold text-center">Currently Trending Games</p>
        <button className="bg-[#160E46] w-[7rem] py-3 text-sm rounded-lg">SEE ALL</button>
      </div>

      <div className="flex flex-wrap items-center justify-center xl:justify-between sm:space-x-4 xl:space-x-0 mt-[4rem]">
        {images.map((image, index) => (
          <TrendingCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
