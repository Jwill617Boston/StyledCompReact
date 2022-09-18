import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Homepage/Home";
import UserPage from "./pages/Userpage/UserPage";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import RequireAuth from "./layout/RequiredAuth";
import SignUp from "./pages/Signuppage/SignUp";

import { getAuth } from "firebase/auth";
import Login from "./pages/Loginpage/Login";

import { useruid } from "./redux/userSlice";

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               {/* public routes */}
               <Route path="home" element={<Home />} />
               <Route path="signup" element={<SignUp />} />
               <Route path="login" element={<Login />} />
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
