import React from "react";
import { Outlet } from "react-router-dom";
import TopBarNav from "../topnav/TopBarNav";

const Layout = () => {
   return (
      <main>
         <TopBarNav />
         <Outlet />
      </main>
   );
};

export default Layout;
