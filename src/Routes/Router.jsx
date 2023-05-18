import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Banner from "../Banner/Banner";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Banner></Banner>,
          },
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