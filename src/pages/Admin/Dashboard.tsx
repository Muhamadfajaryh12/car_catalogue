import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const content = () => {
  return (
    <div className=" m-4">
      <div className="content-vehicle-list my-2 p-2 bg-white rounded-md">
        <div className="header-vehicle-list">
          <h1>Vehicle List</h1>
        </div>
      </div>
      <div className="content-category-list my-2 p-2 bg-white rounded-md">
        <div className="header-category-list">
          <h1>Category List</h1>
        </div>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return <AdminLayout content={content()} />;
};

export default Dashboard;
