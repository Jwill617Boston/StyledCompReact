import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/regester/Regester";
import UserPage from "./components/userpage/UserPage";
import Layout from "./components/layout/Layout";

const ROLES = {
   User: 2001,
   Editor: 1984,
   Admin: 5150,
};

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               {/* public routes */}
               <Route path="home" element={<Home />} />
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />
               {/* user routes */}
               <Route path="userpage" element={<UserPage />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;
