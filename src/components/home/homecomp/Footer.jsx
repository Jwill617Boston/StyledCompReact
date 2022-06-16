import React from "react";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   background-color: #111;
   color: white;
   height: 10%;
`;

const Wrapper = styled.div`
   padding: 20px;
   display: flex;
   justify-content: space-between;
`;

const List = styled.ul`
   padding: 0;
   margin: 0;
   list-style: none;
   display: flex;
`;

const ListItem = styled.li`
   margin-right: 20px;
`;

const Copyright = styled.span``;

const Footer = () => {
   return (
      <Container>
         <Wrapper>
            <List>
               <ListItem>Guide</ListItem>
               <ListItem>Support</ListItem>
               <ListItem>API</ListItem>
               <ListItem>Community</ListItem>
            </List>
            <Copyright>JAW Ⓒ</Copyright>
         </Wrapper>
      </Container>
   );
};

export default Footer;
