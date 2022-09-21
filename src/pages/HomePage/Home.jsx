import React from "react";
import styled from "styled-components";

import Feature from "../../components/Home/Feature";

import { Container } from "./home.styled";

const Home = () => {
   return (
      <>
         <Container>
            <h1>Home</h1>
            <Feature />
         </Container>
      </>
   );
};

export default Home;
