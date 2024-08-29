import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table";
import CategoryAPI from "../../api/CategoryAPI";
import CatalogueAPI from "../../api/CatalogueAPI";
import { FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCatalogue, setDataCatalogue] = useState([]);
  useEffect(() => {
    const category = async () => {
      const response = await CategoryAPI.getCategory();
      setDataCategory(response);
    };
    category();
  }, []);

  useEffect(() => {
    const catalogue = async () => {
      const response = await CatalogueAPI.GetCatalogue();
      setDataCatalogue(response);
      console.log(response);
    };
    catalogue();
  }, []);
  const columsCategory = useMemo(
    () => [
      {
        name: "No",
        selector: (row, index) => ++index,
      },
      {
        name: "Category",
        selector: (row) => row.nama_category,
      },
      {
        name: "Action",
        selector: (row) => <button className="bg-red-300"> delete</button>,
      },
    ],
    []
  );
  const columsVehicle = useMemo(
    () => [
      {
        name: "No",
        selector: (row, index) => ++index,
      },
      {
        name: "Vehicle",
        selector: (row) => row.nama_product,
      },
      {
        name: "Year",
        selector: (row) => row.tahun_product,
      },
      {
        name: "Price",
        selector: (row) => row.harga,
      },
      {
        name: "Picture",
        selector: (row) => (
          <img
            src={`http://localhost:8080/${row.gambar_product}`}
            alt=""
            className="w-24 h-20 p-1"
          />
        ),
      },
      {
        name: "Action",
        selector: (row) => (
          <button className="bg-red-500 p-2 roundend-md text-white">
            <FaTrash size={20} />
          </button>
        ),
      },
    ],
    []
  );

  return (
    <div className=" m-4">
      <div className="content-vehicle-list my-2 p-2 bg-white rounded-md">
        <Table
          rows={dataCatalogue.products}
          columns={columsVehicle}
          title={"List Vehicle"}
        />{" "}
      </div>

      <div className="content-category-list my-2 p-2 bg-white rounded-md">
        <Table
          rows={dataCategory.category}
          columns={columsCategory}
          title={"List Category"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
