import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
  ]);


export default router