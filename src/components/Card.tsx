import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-72 h-96 border-2 m-2 rounded-md relative">
      <div id="card-image" className="w-64 h-64 mx-auto m-2 ">
        <img
          src={`http://localhost:8080/${data.gambar_product}`}
          className="rounded-md mx-auto h-52"
          alt=""
        />
      </div>
      <div id="card-text">
        <p>{data.deskripsi_product}</p>
        <p className="font-semibold text-red-600">
          Price <span className="text-black">Rp.{data.harga}</span>
        </p>

        <button className="bg-blue-500 w-full text-white font-semibold  absolute bottom-0">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
