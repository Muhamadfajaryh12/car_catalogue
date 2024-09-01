import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatalogueAPI from "../api/CatalogueAPI";

const DetailCatalog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await CatalogueAPI.GetCatalogueID(id);
    setData(response.product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-1/2 mx-auto">
      <figure>
        <img
          src={`http://localhost:8080/${data?.gambar_product}`}
          alt=""
          className="w-96 mx-auto my-10 h-64"
        />
      </figure>
      <h6 className="text-3xl font-bold" style={{ letterSpacing: "3px" }}>
        {data?.nama_product}
      </h6>
      <div className="bg-gray-200 p-1 my-4 rounded-full font-bold text-lg w-32 text-center">
        {data?.category.nama_category}
      </div>
      <div className="text-justify my-4" style={{ letterSpacing: "3px" }}>
        <p>{data?.deskripsi_product}</p>
      </div>
      <h2 className="text-2xl text-red-500 font-bold">
        Price
        <span
          className="text-black text-4xl mx-2"
          style={{ letterSpacing: "2px" }}
        >
          {data?.harga}
        </span>
      </h2>
    </div>
  );
};

export default DetailCatalog;
