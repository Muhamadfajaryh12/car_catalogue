import { useEffect, useState } from "react";
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
import PrivateRoute from "./router/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreload } from "./states/Preload/action";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<PrivateRoute />}>
            <Route path="/create_catalogue" element={<CreateCatalogue />} />
            <Route path="/create_category" element={<CreateCategory />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
