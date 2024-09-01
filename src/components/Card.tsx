import React from "react";
import useCurrency from "../hooks/useCurrency";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const formattedPrice = useCurrency(data.harga);

  return (
    <div className="w-72 h-72 shadow-md border-2 m-2 rounded-md relative">
      <div id="card-image" className="w-64 h-40 mx-auto m-2 ">
        <img
          src={`http://localhost:8080/${data.gambar_product}`}
          className="rounded-md mx-auto h-40 w-64"
          alt=""
        />
      </div>
      <div id="card-text" className="ml-2">
        <p className="text-black/30 font-semibold text-sm">
          {data.category.nama_category}
        </p>
        <p className="font-bold">{data.nama_product}</p>
        <p className="font-semibold text-red-600">
          Price <span className="text-black">{formattedPrice}</span>
        </p>
      </div>
      <Link
        className="bg-blue-500 w-full p-1 text-white font-semibold  absolute bottom-0 text-center"
        to={`/${data.id}`}
      >
        Buy Now
      </Link>
    </div>
  );
};

export default Card;
