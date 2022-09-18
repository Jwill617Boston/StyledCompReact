import React from "react";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   height: calc(100vh - 80px);
   justify-content: center;
   align-items: center;
   padding: 10px;
   overflow: hidden;
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
