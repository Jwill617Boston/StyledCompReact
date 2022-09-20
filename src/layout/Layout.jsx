import React from "react";
import { Outlet } from "react-router-dom";
import TopBarNav from "../components/topnav/TopBarNav";
import Home from "../pages/Homepage/Home";

const Layout = () => {
   return (
      <main>
         <TopBarNav />
         <Home />
         <Outlet />
      </main>
   );
};

export default Layout;
