import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import CategoryAPI from "../../api/CategoryAPI";

const Dashboard = () => {
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const category = async () => {
      const response = await CategoryAPI.getCategory();
      setDataCategory(response);
    };
    category();
  }, []);
  const colums = [
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
  ];
  return (
    <div className=" m-4">
      <div className="content-vehicle-list my-2 p-2 bg-white rounded-md">
        <div className="header-vehicle-list">
          <h1>Vehicle List</h1>
        </div>
      </div>
      <div className="content-category-list my-2 p-2 bg-white rounded-md">
        <Table
          rows={dataCategory.category}
          columns={colums}
          title={"List Category"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
