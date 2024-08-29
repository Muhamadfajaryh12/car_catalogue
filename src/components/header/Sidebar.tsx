import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const itemSidebar = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Form Vehicle",
      link: "/create_catalogue",
    },
    {
      title: "Form Category",
      link: "/create_category",
    },
  ];

  const handleActive = (param: string) => {
    setActive(param);

    console.log(active);
  };
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
              className={` ml-10 mt-2 text-lg font-bold text-gray-400 hover:text-black ${
                active == item.title ? "text-black" : ""
              }`}
              style={{ letterSpacing: "3px" }}
              onClick={() => handleActive(item.title)}
              key={item.title}
            >
              <Link to={item.link}>{item.title}</Link>
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
