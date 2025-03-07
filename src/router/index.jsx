import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../shared/layouts/mainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
