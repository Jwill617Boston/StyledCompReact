import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 90%;
   background: lightgrey;
`;

const Wrapper = styled.div`
   height: 100%;
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const FormContainer = styled.div`
   width: 50%;
`;

const Form = styled.form`
   height: 250px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const LeftForm = styled.div``;

const RightForm = styled.div``;

const AddressContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Contact = () => {
   return (
      <Container>
         <Wrapper>
            <FormContainer>
               <Form>F</Form>
            </FormContainer>
            <AddressContainer>A</AddressContainer>
         </Wrapper>
      </Container>
   );
};

export default Contact;
