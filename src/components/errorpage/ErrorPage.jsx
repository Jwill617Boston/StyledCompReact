import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ErrorPage = () => {
   return (
      <>
         <Container>
            <h1>ErrorPage</h1>
         </Container>
      </>
   );
};

export default ErrorPage;
