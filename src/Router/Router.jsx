import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Banner from "../Banner/Banner";
import Home from "../Home/Home";

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
  ]);

  export default router;