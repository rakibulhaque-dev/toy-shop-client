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
import ToyDetails from "../ShopSection/ToyDetails";
import Blog from "../Pages/Blog/Blog";

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
            element: <AddToys></AddToys>,
            loader: () => fetch('http://localhost:5000/toys')
          },
          {
            path: '/alltoys',
            element: <PrivateRoute><ShopSection></ShopSection></PrivateRoute>
          },
          {
            path: '/toydetails/:id',
            element: <ToyDetails></ToyDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
          },
          {
            path: '/blogs',
            element: <Blog></Blog>
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