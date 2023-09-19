import { useParams } from "react-router-dom";
import { MoviesType, moviesData } from "../../data/movies";
import MovieDetails from "../components/Movies/MovieDetails";

function MovieDetailsById() {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.imdbId === id) as unknown as MoviesType;
  return <MovieDetails movie={movie} />;
}

export default MovieDetailsById;
