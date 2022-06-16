import { useContext } from "react";
import AuthContext from "../utilities/AuthProvider";

const useAuth = () => {
   return useContext(AuthContext);
};

export default useAuth;
