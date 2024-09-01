import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Filter from "../components/Filter";
import CatalogueAPI from "../api/CatalogueAPI";
import CategoryAPI from "../api/CategoryAPI";
import Loading from "../components/common/Loading";
const Catalog = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [responseCatalogue, responseCategory] = await Promise.all([
        CatalogueAPI.GetCatalogue(),
        CategoryAPI.getCategory(),
      ]);

      setData(responseCatalogue.products);
      setCategory(responseCategory.category);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4">
        <Banner />
        <Filter data={category} />
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {data?.map((item) => (
              <Card data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
