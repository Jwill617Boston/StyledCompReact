import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/HomePage/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserPage from "./pages/HomePage/UserPage/UserPage";

const App = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserPage />}>
               <Route path=":userId" />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
         </Routes>
      </>
   );
};

export default App;
