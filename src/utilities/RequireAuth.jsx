import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
   const { auth } = useAuth();
   const location = useLocation();
   const value = window.localStorage.getItem("uid");

   return value || auth.uid ? (
      <Outlet />
   ) : (
      <Navigate to="/home" state={{ from: location }} replace />
   );
   
};

export default RequireAuth;
