import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
   width: 100%;
   height: 80px;
   background-color: black;
   display: flex;
   flex-direction: column;
   @media (min-width: 740px) {
      height: 80px;
   }
`;

export const LeftContainer = styled.div`
   flex: 70%;
   display: flex;
   color: red;
   align-items: center;
   padding-left: 5%;
`;

export const RightContainer = styled.div`
   flex: 30%;
   display: flex;
   justify-content: flex-end;
   padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
`;

export const NavbarLinkContainer = styled.div`
   display: flex;
`;

export const NavbarLink = styled(Link)`
   color: white;
   font-size: x-large;
   font-family: Arial, Helvetica, sans-serif;
   text-decoration: none;
   margin: 10px;
   @media (max-width: 740px) {
      display: none;
   }
`;

export const NavbarLinkExtended = styled(Link)`
   color: white;
   font-size: x-large;
   font-family: Arial, Helvetica, sans-serif;
   text-decoration: none;
   margin: 10px;
`;

export const Logo = styled.img`
   margin: 10px;
   max-width: 180px;
   height: auto;
`;

export const OpenLinksButton = styled.button`
   width: 70px;
   height: 50px;
   background: none;
   border: none;
   color: white;
   font-size: 45px;
   cursor: pointer;
   @media (min-width: 740px) {
      display: none;
   }
`;

export const NavbarExtendedContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: black;
   @media (min-width: 740px) {
      display: none;
   }
`;
