import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/regester/Regester";
import UserPage from "./components/userpage/UserPage";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/errorpage/ErrorPage";
import RequireAuth from "./components/layout/RequiredAuth";

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
               <Route element={<RequireAuth />}>
                  {/* user routes */}
                  <Route path="userpage" element={<UserPage />} />
               </Route>
            </Route>

            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </>
   );
};

export default App;
