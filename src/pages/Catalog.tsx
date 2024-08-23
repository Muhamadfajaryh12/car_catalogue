import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Filter from "../components/Filter";
const Catalog = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4">
        <Banner />
        <Filter />
        <Card />
      </div>
    </div>
  );
};

export default Catalog;
