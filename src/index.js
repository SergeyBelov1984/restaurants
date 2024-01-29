import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardRes from "./components/CardRes";
import RootLayout from "./layouts/RootLayout";
import Restaurants from "./pages/Restaurants";
import CardRestaurant from "./components/CardRestaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/:id",
        element: <CardRestaurant />,
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
reportWebVitals();
