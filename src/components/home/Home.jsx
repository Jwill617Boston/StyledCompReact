import React from "react";

import LocomotiveScroll from "locomotive-scroll";

import {
   Container,
   IntroShape,
   FeaturedShape,
   ServiceShape,
   PriceShape,
} from "./Home.style.js";

import Intro from "../../components/home/homecomp/Intro";
import Feature from "../../components/home/homecomp/Feature";
import Service from "../../components/home/homecomp/Service";
import Price from "../../components/home/homecomp/Price";
import Contact from "../../components/home/homecomp/Contact";
import Footer from "../../components/home/homecomp/Footer";

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
