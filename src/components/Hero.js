import * as React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen items-center pt-[5rem] w-full">
      <bottom>
        <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center text-white text-center xl:text-start space-y-8 mb-[4rem]">
          <p className="text-[#e87d0e] font-medium">Provided By Younes</p>
          <h1 className="text-[2rem] font-bold w-full xl:w-[25rem]">
          Welcome to our Gaming Hub!
          </h1>
          <p className="text-xs w-full xl:w-[19rem] text-gray-200">
          Explore a variety of exciting games that are bound to keep you entertained for hours. From classic favorites to thrilling new experiences, our collection has something for everyone.
          </p>
          <p className="text-xs w-full xl:w-[19rem] text-gray-200">
          Take your pick from engaging options like TicTacToe, Pong, Quiz, and much more. Challenge yourself or play with friends for an exhilarating gaming session.
          </p>
          <p className="text-xs w-full xl:w-[19rem] text-gray-200">

          Don't forget to check back often as we continue to add new and exciting games to our lineup. Let the fun begin!"
          </p>

          <button className="text-sm w-[10rem] py-2 rounded-full bg-gradient-to-tr from-[#D80027] to-[#FB9E3C]">
            Start Gaming
          </button>
        </div>
      </bottom>

<div className="flex items-center justify-center flex-1 h-full">
  <img 
    src="https://img.freepik.com/photos-premium/affiche-pour-serie-films_869640-33808.jpg?w=360" 
    alt="External Hero Image" 
    style={{ maxWidth: "75%", height: "auto" }}
  />
</div>
    </div>
  );
};

export default Hero;
