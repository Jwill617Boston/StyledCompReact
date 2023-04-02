import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import Page2 from "./pages/Page2";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: "page2",
            element: <Page2 />,
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
