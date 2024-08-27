import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreload } from "../states/Preload/action";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { auth = null, preload = false } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreload());
  }, [dispatch]);
  if (preload) {
    return null;
  }
  if (auth) return <Navigate to="/dashboard" />;
  return <Outlet />;
};

export default PublicRoute;
