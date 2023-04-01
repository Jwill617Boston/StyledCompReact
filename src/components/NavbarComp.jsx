import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
               <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavbarComp;
