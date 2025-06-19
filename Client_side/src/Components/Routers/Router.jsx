import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoutes/MainLayoute";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import DashboardLayout from "../Layoutes/DashboardLayout";
import Analytics from "../Layoutes/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Analytics />,
      },
      {
        path: "analytics",
        element: <Analytics />
      }
    ]
  },
  {
    path: "*",
    element: <DashboardLayout />,
  }
]);