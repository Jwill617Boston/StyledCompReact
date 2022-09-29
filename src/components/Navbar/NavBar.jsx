import React, { useState, useContext } from "react";
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
   NavbarLink2,
   Logo,
   OpenLinksButton,
   NavbarLinkExtended,
   NavbarScroll,
} from "./navbar.styled";

import Button from "@material-ui/core/Button";

import { RefContext } from "../../utilities/RefProvider";

const Wrapper = styled.div`
   margin-top: 25px;
   height: 100%;
`;

const NavBar = () => {
   const { pageOne, pageTwo, pageThree, pageFour, scrollToSection } =
      useContext(RefContext);

   console.log("Nav", pageOne);

   const [extendNavbar, setExtendNavbar] = useState(false);

   return (
      <>
         <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
               <LeftContainer>
                  <NavbarLinkContainer>
                     <NavbarLink to="/">Home</NavbarLink>
                     <NavbarLink href="#feature">Feature</NavbarLink>
                     <NavbarLink href="#page3"> Page 3 </NavbarLink>
                     <NavbarLink href="#page4"> Page 4 </NavbarLink>

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
