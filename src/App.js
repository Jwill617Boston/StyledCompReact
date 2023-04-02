import FooterComp from "./components/footer/FooterComp";
import NavbarComp from "./components/navbar/NavbarComp";
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
