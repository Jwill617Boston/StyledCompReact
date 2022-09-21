import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
   NavbarContainer,
   LeftContainer,
   RightContainer,
   NavbarExtendedContainer,
   NavbarInnerContainer,
   NavbarLinkContainer,
   NavbarLink,
   Logo,
   OpenLinksButton,
   NavbarLinkExtended,
} from "./navbar.styled";

const NavBar = () => {
   const [extendNavbar, setExtendNavbar] = useState(false);

   return (
      <>
         <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
               <LeftContainer>
                  <NavbarLinkContainer>
                     <NavbarLink to="/"> Home</NavbarLink>
                     <NavbarLink to="/"> Products</NavbarLink>
                     <NavbarLink to="/"> Contact Us</NavbarLink>
                     <NavbarLink to="/"> About Us</NavbarLink>
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
                  <Logo src=""></Logo>
               </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
               <NavbarExtendedContainer>
                  <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                  <NavbarLinkExtended to="/">Products</NavbarLinkExtended>
                  <NavbarLinkExtended to="/">Contact Us</NavbarLinkExtended>
                  <NavbarLinkExtended to="/"> About Us</NavbarLinkExtended>
               </NavbarExtendedContainer>
            )}
         </NavbarContainer>
      </>
   );
};

export default NavBar;
