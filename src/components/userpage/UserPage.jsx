import React from "react";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

const UserPage = () => {
   return (
      <>
         <Container>
            <h1>UserPage</h1>
         </Container>
      </>
   );
};

export default UserPage;
