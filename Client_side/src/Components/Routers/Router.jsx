import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Pages/Login";
import DashboardLayout from "../Layoutes/DashboardLayout";
import Analytics from "../Layoutes/Analytics";
import App from "../../App";
import FrontPages from "../FrontPgaes/FrontPages";
import Landing from "../FrontPgaes/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
    path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  // frontPages Landing Page
  {
    path: "/front-pages",
    element: <FrontPages />,
    children: [
      {
        path: "landing",
        element: <Landing />,
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