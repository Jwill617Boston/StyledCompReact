import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper, Item } from "../sytled/Navbar";

const NavbarComp = () => {
   return (
      <nav>
         <ul>
            <NavWrapper>
               <Item>
                  <Link to={`/`}>Home</Link>
               </Item>
               <Item>
                  <Link to={`/practice`}>Practice Page</Link>
               </Item>
            </NavWrapper>
         </ul>
      </nav>
   );
};

export default NavbarComp;
