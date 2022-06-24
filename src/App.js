import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./components/home/Home";
import Register from "./components/regester/Regester";
import UserPage from "./components/userpage/UserPage";
import Layout from "./layout/Layout";
import ErrorPage from "./components/errorpage/ErrorPage";
import RequireAuth from "./layout/RequiredAuth";
import SignUp from "./components/signup/SignUp";

import useAuth from "./utilities/useAuth";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./components/login/Login";

const ROLES = {
   User: 2001,
   Editor: 1984,
   Admin: 5150,
};

const App = () => {
   const fireauth = getAuth();
   const user = fireauth.currentUser;

   const { auth, setAuth } = useAuth();

   useEffect(() => {
      if (auth) {
         window.localStorage.setItem("uid", auth.uid);
         const value = window.localStorage.getItem("uid");
         console.log("local", value);
      } else {
         setAuth({ ...auth, user });
         console.log("user auth", auth);
      }
      console.log("auth", auth);
   }, [auth]);

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
