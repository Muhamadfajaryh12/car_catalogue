import React from "react";

const Card = () => {
  return (
    <div className="w-72 h-80 border-2 m-2 rounded-md relative">
      <div id="card-image">
        <img src="" alt="" />
      </div>
      <div id="card-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          voluptas!
        </p>
        <p className="font-semibold text-red-600">Price</p>
        <button className="bg-blue-500 w-full text-white font-semibold p-1 absolute bottom-0">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
