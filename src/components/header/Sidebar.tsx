import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const itemSidebar = [
    {
      title: "Dashboard",
    },
    {
      title: "Form Vehicle",
    },
    {
      title: "Form Category",
    },
  ];
  return (
    <div className="w-1/4">
      <div className="header-sidebar">
        <h5
          className="font-bold text-3xl text-center mt-4 text-gray-400"
          style={{ letterSpacing: "3px" }}
        >
          Admin Page
        </h5>
      </div>
      <div className="body-sidebar mt-10">
        <ul>
          {itemSidebar.map((item) => (
            <li
              className="ml-10 mt-2 text-lg font-bold text-gray-400 hover:text-black"
              style={{ letterSpacing: "3px" }}
            >
              {item.title}
            </li>
          ))}
          <li
            className="ml-10 mt-2 text-lg font-bold text-gray-400 hover:text-black"
            style={{ letterSpacing: "3px" }}
            onClick={Logout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
