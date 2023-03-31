import React from "react";
import FooterComp from "../components/FooterComp";
import LandingComp from "../components/LandingComp";
import Section1Comp from "../components/Section1Comp";
import Section2Comp from "../components/Section2Comp";
import Section3Comp from "../components/Section3Comp";
import { Wrapper, Item } from "../components/sytled/Home";

const Home = () => {
   return (
      <>
         <LandingComp />
         <Section1Comp />
         <Section2Comp />
         <Section3Comp />
         <FooterComp />
      </>
   );
};

export default Home;
