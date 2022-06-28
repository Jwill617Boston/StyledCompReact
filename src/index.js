import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utilities/AuthProvider";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <AuthProvider>
               <Routes>
                  <Route path="/*" element={<App />} />
               </Routes>
            </AuthProvider>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);
