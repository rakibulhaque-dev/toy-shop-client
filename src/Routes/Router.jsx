import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Banner from "../Banner/Banner";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import ShopSection from "../ShopSection/ShopSection";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Banner></Banner>,
          },
          {
            path: '/addtoy',
            element: <AddToys></AddToys>
          },
          {
            path: '/alltoys',
            element: <PrivateRoute><ShopSection></ShopSection></PrivateRoute>
          }
        ],
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: 'signup',
      element: <Register></Register>
    }
  ]);

  export default router;