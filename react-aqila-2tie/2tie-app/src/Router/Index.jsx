import { createBrowserRouter } from "react-router-dom";
import VisitorLayout from "../layouts/VisitorLayout";
import VisitorPage from "../Pages/VisitorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <VisitorLayout />,
    children: [
      {
        index: true,
        element: <VisitorPage />,
      },
      {
        path: "visitor",
        element: <VisitorPage />,
      },
    ],
  },
]);
