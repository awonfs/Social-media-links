import React from "react";
import myImage from "../assets/mypic.jpg";

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-8 py-16 justify-center items-center w-full">
        <img src={myImage} alt="myImage"  className="w-32 rounded-full md:w-48"/>
        <h1 className="text-white font-robotoMono text-4xl">Eetu Rönkkö</h1>
      </div>
    </div>
  );
};

export default Header;
