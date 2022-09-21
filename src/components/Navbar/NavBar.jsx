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

import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
   margin-top: 25px;
   height: 100%;
`;

const NavBar = () => {
   const [extendNavbar, setExtendNavbar] = useState(false);

   return (
      <>
         <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
               <LeftContainer>
                  <NavbarLinkContainer>
                     <NavbarLink to="/">Home</NavbarLink>
                     <NavbarLink to="/user"> User </NavbarLink>

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
                  <Wrapper>
                     <Button variant="contained" color="primary">
                        Button
                     </Button>
                  </Wrapper>
               </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
               <NavbarExtendedContainer>
                  <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                  <NavbarLinkExtended to="/user">User</NavbarLinkExtended>
                  <NavbarLinkExtended to="/">Contact Us</NavbarLinkExtended>
                  <NavbarLinkExtended to="/"> About Us</NavbarLinkExtended>
               </NavbarExtendedContainer>
            )}
         </NavbarContainer>
      </>
   );
};

export default NavBar;
