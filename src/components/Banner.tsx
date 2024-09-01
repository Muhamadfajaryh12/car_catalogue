import React from "react";
import BannerImage from "../assets/banner.webp";
const Banner = () => {
  return (
    <div className="bg-gray-100 rounded-lg h-80 p-2  mx-auto mt-6 flex justify-evenly items-center">
      <div className="">
        <h6 className="font-bold text-3xl text-left">Find and</h6>
        <h6 className="font-bold text-2xl text-left">Explore your vehicle</h6>
      </div>
      <figure>
        <img src={BannerImage} alt="" className="w-96" />
      </figure>
    </div>
  );
};

export default Banner;
