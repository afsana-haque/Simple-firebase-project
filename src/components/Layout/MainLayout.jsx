import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default MainLayout;
