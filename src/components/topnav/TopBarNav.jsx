import React, { useState } from "react";
import {
   NavbarContainer,
   LeftContainer,
   RightContainer,
   NavbarExtendedContainer,
   NavbarInnerContainer,
   NavbarLinkContainer,
   NavbarLink,
   NavBarLoginButton,
   OpenLinksButton,
   NavbarLinkExtended,
} from "./TopBarNav.style.js";

function TopBarNav() {
   const [extendNavbar, setExtendNavbar] = useState(false);

   return (
      <>
         <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
               <LeftContainer>
                  <NavbarLinkContainer>
                     <NavbarLink to="/home"> Home</NavbarLink>
                     <NavbarLink to="#"> Products</NavbarLink>
                     <NavbarLink to="/register"> Register</NavbarLink>
                     <NavbarLink to="/userpage"> User Page</NavbarLink>

                     <OpenLinksButton
                        onClick={() => {
                           setExtendNavbar((curr) => !curr);
                        }}
                     >
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                     </OpenLinksButton>
                  </NavbarLinkContainer>
               </LeftContainer>
               <RightContainer>
                  <NavBarLoginButton>
                     <NavbarLink to="/Login"> Login</NavbarLink>
                  </NavBarLoginButton>
               </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
               <NavbarExtendedContainer>
                  <NavbarLinkExtended
                     onClick={() => {
                        setExtendNavbar((curr) => !curr);
                     }}
                     to="/"
                  >
                     {" "}
                     Home
                  </NavbarLinkExtended>
                  <NavbarLinkExtended
                     onClick={() => {
                        setExtendNavbar((curr) => !curr);
                     }}
                     to="#"
                  >
                     {" "}
                     Products
                  </NavbarLinkExtended>
                  <NavbarLinkExtended
                     onClick={() => {
                        setExtendNavbar((curr) => !curr);
                     }}
                     to="/register"
                  >
                     {" "}
                     Register
                  </NavbarLinkExtended>
                  <NavbarLinkExtended
                     onClick={() => {
                        setExtendNavbar((curr) => !curr);
                     }}
                     to="/Login"
                  >
                     {" "}
                     Login
                  </NavbarLinkExtended>
               </NavbarExtendedContainer>
            )}
         </NavbarContainer>
      </>
   );
}

export default TopBarNav;
