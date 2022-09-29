import { createContext, useState, useRef } from "react";

export const RefContext = createContext({});

export const RefProvider = ({ children }) => {
   const pageOne = useRef(null);
   const pageTwo = useRef(null);
   const pageThree = useRef(null);
   const pageFour = useRef(null);

   const scrollToSection = (ref) => {
      window.scrollTo({
         top: ref.current.offsetTop,
         behavior: "smooth",
      });
   };

   return (
      <RefContext.Provider
         value={{ pageOne, pageTwo, pageThree, pageFour, scrollToSection }}
      >
         {children}
      </RefContext.Provider>
   );
};

export default RefProvider;
