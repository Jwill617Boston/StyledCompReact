import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./components/home/Home";
import UserPage from "./components/userpage/UserPage";
import Layout from "./layout/Layout";
import ErrorPage from "./components/errorpage/ErrorPage";
import RequireAuth from "./layout/RequiredAuth";
import SignUp from "./components/signup/SignUp";

import { getAuth } from "firebase/auth";
import Login from "./components/login/Login";

import { useruid } from "./redux/userSlice";

const App = () => {
   const dispatch = useDispatch();

   const fireauth = getAuth();
   const user = { uid: "Hey There" };
   console.log("user app", user.uid);

   useEffect(() => {
      dispatch("useruid", user);
   }, []);

   const userData = useSelector((state) => state.user.uid);

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
