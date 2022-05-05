import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
   background-color: white;
   font-size: 32px;
   color: black;
   border-radius: 20px;
`;

function clickButtonA() {
   console.log("Clicked A");
}

function clickButtonB() {
   console.log("Clicked B");
}

export default function Profile() {
   return (
      <div>
         <StyledButton onClick={clickButtonA}>Button A</StyledButton>
         <StyledButton onClick={clickButtonB}>Button B</StyledButton>
      </div>
   );
}
