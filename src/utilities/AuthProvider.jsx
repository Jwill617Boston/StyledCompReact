import { createContext, useState } from "react";



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({});

   localStorage.setItem("user Data", "somthing");

   const localData = localStorage.getItem("user Data");

   const [persist, setPersist] = useState(localData);

   console.log("persist", persist);

   return (
      <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
