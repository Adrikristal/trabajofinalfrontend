import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/Layout/templates/PublicLayout";
import App from "../App";
import MovieDetailsById from "../pages/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "detalle/:id", element: <MovieDetailsById /> },
    ],
  },
  { path: "/bye-out", element: <div>Good bye</div> },
]);
