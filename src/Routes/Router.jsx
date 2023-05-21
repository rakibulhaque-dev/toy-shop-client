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
import MyToy from "../Pages/MyToy/MyToy";
import UpdateToy from "../Pages/MyToy/UpdateToy";

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
            element: <PrivateRoute> <AddToys></AddToys> </PrivateRoute>,
            loader: () => fetch('https://eleven-toy-server.vercel.app/toys')
          },
          {
            path: '/alltoys',
            element: <PrivateRoute><ShopSection></ShopSection></PrivateRoute>
          },
          {
            path: '/blogs',
            element: <Blog></Blog>
          },
          {
            path: '/mytoys',
            element: <PrivateRoute> <MyToy></MyToy> </PrivateRoute>
          },
        
        ],
    },
    {
      path: '/toydetails/:id',
      element: <ToyDetails></ToyDetails>,
      loader: ({params}) => fetch(`https://eleven-toy-server.vercel.app/toys/${params.id}`)
    },
    {
      path: '/update/:id',
      element: <UpdateToy></UpdateToy>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Register></Register>
    }
  ]);

  export default router;