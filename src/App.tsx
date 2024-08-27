import "./App.css";
import Catalog from "./pages/Catalog";
import Dashboard from "./pages/Admin/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateCatalogue from "./pages/Admin/Catalogue/CreateCatalogue";
import CreateCategory from "./pages/Admin/Category/CreateCategory";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PrivateRoute from "./router/PrivateRoute";

import PublicRoute from "./router/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create_catalogue" element={<CreateCatalogue />} />
            <Route path="/create_category" element={<CreateCategory />} />
          </Route>
          <Route path="/" element={<Catalog />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
