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
import Groupdetails from "../pages/Groupdetails";
import Updategroup from "../pages/Updategroup";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../pages/DashboardLayout";
import DashboardOverview from "../components/DashboardOverview";
import DashboardAllgroups from "../pages/DashboardAllgroups";

 

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
     errorElement:<ErrorPage></ErrorPage>,
    children:[

        {
            path:"/",  
            Component:Home,
            loader:()=>fetch('https://hobbyhub-server-nine.vercel.app/groups'),
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

       element: (
          <PrivateRoute>
            <Mygroups />
          </PrivateRoute>
        ), 
      loader:()=>fetch('https://hobbyhub-server-nine.vercel.app/groups'),
     },
     {
        path:"/createGroup",
        element: (
          <PrivateRoute>
            <Newgroup />
          </PrivateRoute>
        ),
        
     },
     {
        path:"/groups",
         
        Component:Allgroups,
        loader:()=>fetch('https://hobbyhub-server-nine.vercel.app/groups'),
     },
     {
        path:"/group/:id",
        Component:Groupdetails,
       loader: ({ params }) => fetch(`https://hobbyhub-server-nine.vercel.app/groups/${params.id}`)
     },
     {
        path:"/mygroups/updateGroup/:id",
        element: (
          <PrivateRoute>
            <Updategroup />
          </PrivateRoute>
        ),
         loader: ({ params }) => fetch(`https://hobbyhub-server-nine.vercel.app/groups/${params.id}`)

     },
     {
      path:"/about",
      Component:AboutUs

     },
     {
      path:"/contact",
      Component:ContactUs
     },
     {

       path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children:[
    //       {
    //   index: true, 
    //   element: (
    //     <PrivateRoute>
    //       <DashboardOverview />
    //     </PrivateRoute>
    //   )
    // },

          {
            path: "mygroups",
            element: (
              <PrivateRoute>
                <Mygroups />
              </PrivateRoute>
            ),
              loader:()=>fetch('https://hobbyhub-server-nine.vercel.app/groups'),
          },
           {
            path: "create",
            element: (
              <PrivateRoute>
                <Newgroup />
              </PrivateRoute>
            ),
          },

          {
  path: 'allgroups',
  element: <DashboardAllgroups />,
  loader: () => fetch('https://hobbyhub-server-nine.vercel.app/groups')
}
        ]
     }
      


     
    ]
  },

   
]);