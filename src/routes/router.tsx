import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/Layout/templates/PublicLayout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "/bye", element: <div>Good bye</div> },
    ],
  },
  { path: "/bye-out", element: <div>Good bye</div> },
]);
