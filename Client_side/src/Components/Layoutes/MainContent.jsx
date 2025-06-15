import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

const MainContent = () => {
  return (
    <div className="flex-1 ">
      <DashboardNavbar  />
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;