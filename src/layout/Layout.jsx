import React from "react";
import { Outlet } from "react-router-dom";
import TopBarNav from "../components/topnav/TopBarNav";

const Layout = () => {
   return (
      <main>
         <TopBarNav />
         <Outlet />
      </main>
   );
};

export default Layout;
