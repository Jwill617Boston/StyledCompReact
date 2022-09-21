import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";

const Container = styled.div`
   display: flex;
   justify-content: center;
`;

const App = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </>
   );
};

export default App;
