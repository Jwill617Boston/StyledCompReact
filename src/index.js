import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Root from "./routes/root";
import Contact from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
   },
   {
      path: "contacts/:contactId",
      element: <Contact />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
