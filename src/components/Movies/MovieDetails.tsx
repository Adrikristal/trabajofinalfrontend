import { MoviesType } from "../../../data/movies";

type Props = { movie: MoviesType };

const MovieDetails = (props: Props) => {
  const { movie } = props;
  return (
    <div>
      <img src={movie.poster} />
      {/* <div>
        <span>Gallery</span>
        {movie.images.map((image) => (
          <img key={image} src={image} alt="image" />
        ))}
      </div> */}
      <h1>{movie?.title}</h1>
      <p>Actores: {movie?.actors}</p>
      <p>Géneros: {movie?.genre}</p>
    </div>
  );
};

export default MovieDetails;
