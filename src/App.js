import "./App.css";


import styled from "styled-components";

const Container = styled.div`
   height: 50px;
`;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Left = styled.div`
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Logo = styled.h1`
   font-weight: bold;
   text-decoration: underline crimson;
`;

const Menu = styled.ul`
   display: flex;
   list-style: none;
`;

const MenuItem = styled.li`
   margin-right: 30px;
   font-size: 20px;
   font-weight: bold;
   color: grey;
`;

const Button = styled.button`
   border: 2px solid black;
   padding: 10px 15px;
   background-color: crimson;
   color: white;
   font-weight: bold;
`;

function App() {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Logo>Agency</Logo>
               <Menu>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Features</MenuItem>
                  <MenuItem>Services</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                  <MenuItem>Contact</MenuItem>
               </Menu>
            </Left>
            <Button>JOIN NOW</Button>
         </Wrapper>
      </Container>
   );
}

export default App;
