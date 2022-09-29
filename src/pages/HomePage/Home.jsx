import React, { useContext } from "react";
import styled from "styled-components";

import Feature from "../../components/Home/Feature";

import { Container, Wrapper } from "./home.styled";

import { RefContext } from "../../utilities/RefProvider";

const Home = () => {
   const { pageOne, pageTwo, pageThree, pageFour } = useContext(RefContext);
   return (
      <>
         <Container id="page1">
            <Wrapper>
               <h1>Page 1</h1>
            </Wrapper>
         </Container>
         <Container id="feature">
            <Wrapper>
               <Feature />
            </Wrapper>
         </Container>
         <Container id="page3">
            <Wrapper>
               <h1>Page 3</h1>
            </Wrapper>
         </Container>
         <Container id="page4">
            <Wrapper>
               <h1>Page 4</h1>
            </Wrapper>
         </Container>
      </>
   );
};

export default Home;
