import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { RefProvider } from "./utilities/RefProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <RefProvider>
               <App />
            </RefProvider>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);
