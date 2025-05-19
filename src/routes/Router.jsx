import {
  createBrowserRouter,
  
} from "react-router";
import Rootlayout from "../Rootlayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";

 

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    children:[

        {
            path:"/",
            Component:Home
        },
         {
        path:"/login",
         Component:Login
     },
     {
      path:"/register",
       Component:Register
     },
    ]
  },
]);