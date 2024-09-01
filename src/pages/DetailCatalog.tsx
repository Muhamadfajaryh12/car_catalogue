import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CatalogueAPI from "../api/CatalogueAPI";
import CatalogueType from "../types/Catalogue";
import Loading from "../components/common/Loading";

const DetailCatalog = () => {
  const { id } = useParams<{ id: number }>();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CatalogueType | null>(null);
  const fetchData = async () => {
    try {
      const response = await CatalogueAPI.GetCatalogueID(id);
      setData(response.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          <Link to={"/"}>
            <div
              className="bg-blue-500 p-1 rounded-full text-white font-semibold w-32 text-center text-xl mx-auto mt-5 hover:bg-blue-600"
              style={{ letterSpacing: "2px" }}
            >
              Back
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default DetailCatalog;
