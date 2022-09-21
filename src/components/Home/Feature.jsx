import React from "react";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   background-color: red;
   width: 100%;
   justify-content: center;
   align-items: center;
`;

const Feature = () => {
   return (
      <>
         <Container>
            <h1>Feature</h1>
         </Container>
      </>
   );
};

export default Feature;
