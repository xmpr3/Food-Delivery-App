import React, { lazy, Suspense, StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx"
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

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
         {
            path: "/grocery",
            element: (
               <Suspense fallback={<h1>Loading........</h1>}>
                  <Grocery />
               </Suspense>
            ),
         },
         {
            path: "/cart",
            element: <Cart />
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
