import React from "react";
import styled from "styled-components";
import Woman from "../img/woman2.png";

const Container = styled.div`
   display: flex;
`;

const Left = styled.div`
   width: 50%;
`;

const Image = styled.img`
   height: 100%;
   margin-left: 100px;
`;

const Right = styled.div`
   width: 50%;
`;

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
   flex-direction: column;
`;

const Desc = styled.p`
   font-size: 20px;
   margin-top: 20px;
   color: #555;
`;

const Title = styled.h1``;

const Service = () => {
   return (
      <>
         <Container>
            <Left>
               <Image src={Woman} />
            </Left>
            <Right>
               <Wrapper>
                  <Title>Simple process to start</Title>

                  <Desc>
                     We provide digital experience services to startups and
                     small businesses to looking for a partner of their digital
                     media, design & development, lead generation and
                     communications requirents. We work with you, not for you.
                     Although we have a great resources
                  </Desc>
               </Wrapper>
            </Right>
         </Container>
      </>
   );
};

export default Service;
