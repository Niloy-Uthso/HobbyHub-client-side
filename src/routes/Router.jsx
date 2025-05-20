import {
  createBrowserRouter,
  
} from "react-router";
import Rootlayout from "../Rootlayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../pages/ErrorPage";
import Mygroups from "../pages/Mygroups";
import Newgroup from "../pages/Newgroup";
import Allgroups from "../pages/Allgroups";

 

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
     errorElement:<ErrorPage></ErrorPage>,
    children:[

        {
            path:"/",  
            Component:Home,
            loader:()=>fetch('http://localhost:3000/groups'),
        },
         {
        path:"/login",
         Component:Login
     },
     {
      path:"/register",
       Component:Register
     },
      {
      path:"/mygroups",
      Component:Mygroups
     },
     {
        path:"/newgroup",
        Component:Newgroup
     },
     {
        path:"/groups",
         
        Component:Allgroups,
        loader:()=>fetch('http://localhost:3000/groups'),
     }
     
    ]
  },
]);