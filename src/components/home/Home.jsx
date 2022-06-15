import React from "react";

import LocomotiveScroll from "locomotive-scroll";

import {
   Container,
   IntroShape,
   FeaturedShape,
   ServiceShape,
   PriceShape,
} from "./Home.style.js";

import Intro from "../../components/Intro";
import Feature from "../../components/Feature";
import Service from "../../components/Service";
import Price from "../../components/Price";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

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
