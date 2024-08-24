import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Catalog from "./pages/Catalog";
import Dashboard from "./pages/Admin/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateCatalogue from "./pages/Admin/Catalogue/CreateCatalogue";
import CreateCategory from "./pages/Admin/Category/CreateCategory";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create_catalogue" element={<CreateCatalogue />} />
          <Route path="/create_category" element={<CreateCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
