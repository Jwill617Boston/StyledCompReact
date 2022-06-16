import TopBarNav from "./components/topnav/TopBarNav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/regester/Regester";

const ROLES = {
   User: 2001,
   Editor: 1984,
   Admin: 5150,
};

const App = () => {
   return (
      <>
         <TopBarNav />
         <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* user routes */}
         </Routes>
      </>
   );
};

export default App;
