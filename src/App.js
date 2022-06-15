import TopBarNav from "./components/topnav/TopBarNav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
   return (
      <>
         <TopBarNav />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </>
   );
};

export default App;
