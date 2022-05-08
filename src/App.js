import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Nabar";

const Container = styled.div`
   height: 100vh;
`;

const App = () => {
   return (
      <Container>
         <Navbar />
         <Intro />
      </Container>
   );
};

export default App;
