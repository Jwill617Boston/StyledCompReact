import FooterComp from "./components/FooterComp";
import NavbarComp from "./components/NavbarComp";
import PracticePage from "./pages/PracticePage";
import { Outlet } from "react-router-dom";

const App = () => {
   return (
      <>
         <NavbarComp />
         <Outlet />
         <FooterComp />
      </>
   );
};

export default App;
