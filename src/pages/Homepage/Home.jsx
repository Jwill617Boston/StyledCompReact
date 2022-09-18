import React from "react";

import LocomotiveScroll from "locomotive-scroll";

import {
   Container,
   IntroShape,
   FeaturedShape,
   ServiceShape,
   PriceShape,
} from "./Home.style.js";

import Intro from "./homecomp/Intro";
import Feature from "./homecomp/Feature";
import Service from "./homecomp/Service";
import Price from "./homecomp/Price";
import Contact from "./homecomp/Contact";
import Footer from "./homecomp/Footer";

const Home = () => {
   return (
      <>
         <Container>
            <Intro />
            <IntroShape />
         </Container>
         <Container>
            <Feature />
            <FeaturedShape />
         </Container>
         <Container>
            <Service />
            <ServiceShape />
         </Container>
         <Container>
            <Price />
            <PriceShape />
         </Container>
         <Container>
            <Contact />
            <Footer />
         </Container>
      </>
   );
};

export default Home;
