import styled from "styled-components";
import Navbar from "./components/Nabar";

const Container = styled.div`
   height: 100vh;
`;

const App = () => {
   return (
      <Container>
         <Navbar />
      </Container>
   );
};

export default App;
