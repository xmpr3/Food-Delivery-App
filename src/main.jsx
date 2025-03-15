import { StrictMode } from "react";
import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element: <ContactUs />,
         },
         {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
         },
      ],
   },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <StrictMode>
      <RouterProvider router={appRouter} />
   </StrictMode>,
);
