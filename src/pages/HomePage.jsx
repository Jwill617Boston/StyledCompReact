import React from "react";
import LandingComp from "../components/homepage/LandingComp";
import Section1Comp from "../components/homepage/Section1Comp";
import Section2Comp from "../components/homepage/Section2Comp";
import Section3Comp from "../components/homepage/Section3Comp";

const Home = () => {
   return (
      <>
         <LandingComp />
         <Section1Comp />
         <Section2Comp />
         <Section3Comp />
      </>
   );
};

export default Home;
