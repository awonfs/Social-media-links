import React from "react";
import myImage from "../assets/mypic.jpg";

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-6 py-4 justify-center items-center w-full md:py-16 md:gap-8">
        <img src={myImage} alt="myImage"  className="w-32 rounded-full md:w-48"/>
        <h1 className="text-gray-100 font-bold drop-shadow-lg font-robotoMono text-4xl">Eetu Rönkkö</h1>
      </div>
    </div>
  );
};

export default Header;
