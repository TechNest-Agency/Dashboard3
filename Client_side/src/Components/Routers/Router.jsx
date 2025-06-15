import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoutes/MainLayoute";
import Home from "../Home/Home";
import Login from "../Pages/Login";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
