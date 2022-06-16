import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
   width: 100%;
   height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
   background-color: black;
   color: white;
   display: flex;
   flex-direction: column;
   @media (min-width: 700px) {
      height: 80px;
   }
`;

export const LeftContainer = styled.div`
   flex: 70%;
   display: flex;
   align-items: center;
   padding-left: 5%;
`;

export const RightContainer = styled.div`
   flex: 30%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
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
   @media (max-width: 700px) {
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
   @media (min-width: 700px) {
      display: none;
   }
`;

export const NavbarExtendedContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (min-width: 700px) {
      display: none;
   }
`;

export const NavBarLoginButton = styled.button`
   background: #3498db;
   background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
   background-image: -moz-linear-gradient(top, #3498db, #2980b9);
   background-image: -ms-linear-gradient(top, #3498db, #2980b9);
   background-image: -o-linear-gradient(top, #3498db, #2980b9);
   background-image: linear-gradient(to bottom, #3498db, #2980b9);
   -webkit-border-radius: 28;
   -moz-border-radius: 28;
   border-radius: 28px;
   font-family: Arial;
   color: #ffffff;
   font-size: 20px;
   padding: 10px 20px 10px 20px;
   text-decoration: none;

   @media (max-width: 700px) {
      display: none;
   }
`;
