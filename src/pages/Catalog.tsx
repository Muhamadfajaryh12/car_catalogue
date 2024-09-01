import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Filter from "../components/Filter";
import CatalogueAPI from "../api/CatalogueAPI";
import CategoryAPI from "../api/CategoryAPI";
const Catalog = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const fetchData = async () => {
    const responseCatalogue = await CatalogueAPI.GetCatalogue();
    setData(responseCatalogue.products);

    const responseCategory = await CategoryAPI.getCategory();
    setCategory(responseCategory.category);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4">
        <Banner />
        <Filter data={category} />
        <div className="grid grid-cols-4 gap-2">
          {data?.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
