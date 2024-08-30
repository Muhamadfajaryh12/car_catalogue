import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Filter from "../components/Filter";
import CatalogueAPI from "../api/CatalogueAPI";
const Catalog = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await CatalogueAPI.GetCatalogue();
    setData(response.products);
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4">
        <Banner />
        <Filter />
        <div className="grid grid-cols-3 gap-2">
          {data?.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
