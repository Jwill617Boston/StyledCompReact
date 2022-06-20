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

import useAuth from "../../utilities/useAuth";

import { getAuth, signOut } from "firebase/auth";

function TopBarNav() {
   const fireAuth = getAuth();

   const { auth } = useAuth();

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
                  {!auth.uid ? (
                     <NavBarLoginButton>
                        <NavbarLink to="/signup"> Sign Up</NavbarLink>
                     </NavBarLoginButton>
                  ) : (
                     <NavBarLoginButton
                        onClick={() => {
                           signOut(fireAuth)
                              .then(() => {
                                 // Sign-out successful.
                              })
                              .catch((error) => {
                                 // An error happened.
                              });
                        }}
                     >
                        Log Out
                     </NavBarLoginButton>
                  )}
                  <NavBarLoginButton>
                     <NavbarLink to="/login"> Login</NavbarLink>
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
