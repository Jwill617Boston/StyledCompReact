import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Nabar";

const Container = styled.div`
   height: 100vh;
   overflow: hidden;
`;

const IntroShape = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
   background-color: crimson;
`;

const App = () => {
   return (
      <Container>
         <Navbar />
         <Intro />
         <IntroShape />
      </Container>
   );
};

export default App;
