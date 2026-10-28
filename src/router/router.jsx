import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import Loading from "../pages/shared/Loading/Loading";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayouts,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:"/coverage",
          Component:Coverage,
          loader:() => fetch("/serviceCenter.json"),
          hydrateFallbackElement:<Loading />
        },
        {
          path:"/sendParcel",
          element:<PrivateRoute><SendParcel /></PrivateRoute>,
          loader:() => fetch("/serviceCenter.json"),
          hydrateFallbackElement:<Loading />
        }
    ]
  },
  {
    path:"/",
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
    children:[
      {
        path:"myParcels",
        Component:MyParcels
      }
    ]
  }
]);