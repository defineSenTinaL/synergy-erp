import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Nav } from "./Navbar";

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <div>
      <Sidebar isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <Nav isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <Outlet />
    </div>
  );
};

export default Layout;
