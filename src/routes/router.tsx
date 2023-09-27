import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/Layout/templates/PublicLayout";
import App from "../App";
import MovieDetailsById from "../pages/MovieDetails";
import { ROUTES } from "../utils/routes";
import ReservePage from "../pages/ReservePage";

export const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <PublicLayout />,
    children: [
      { index: true, element: <App /> },
      { path: ROUTES.DETAIL_ID, element: <MovieDetailsById /> },
      { path: ROUTES.RESERVE, element: <ReservePage /> },
    ],
  },
  { path: "/bye-out", element: <div>Good bye</div> },
]);
