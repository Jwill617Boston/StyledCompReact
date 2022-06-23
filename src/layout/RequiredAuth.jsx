import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../utilities/useAuth";
import { getAuth } from "firebase/auth";

const RequireAuth = () => {
   const { auth } = useAuth();
   const location = useLocation();

   return auth.uid ? (
      <Outlet />
   ) : (
      <Navigate to="home" state={{ from: location }} replace />
   );
};

export default RequireAuth;
