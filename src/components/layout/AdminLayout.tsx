import Sidebar from "../header/sidebar";

const AdminLayout = ({ content }) => {
  return (
    <div className=" w-screen flex">
      <Sidebar />
      <div className="bg-gray-200 w-3/4">{content}</div>
    </div>
  );
};

export default AdminLayout;
