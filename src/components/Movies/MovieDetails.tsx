import { MoviesType } from "../../../data/movies";
import Button from "../Buttons/Button";
import styles from "../../styles/pages/movie-details.module.scss";

type Props = { movie: MoviesType };

const MovieDetails = (props: Props) => {
  const { movie } = props;

  function reserveMovie() {
    console.log("Reserved");
  }
  function addToCart() {
    console.log("added to cart");
  }
  return (
    <div className={styles["movie-details"]}>
      {/* <img src={movie.poster} /> */}
      {/* <div>
        <span>Gallery</span>
        {movie.images.map((image) => (
          <img key={image} src={image} alt="image" />
        ))}
      </div> */}
      <h1 className={styles.title}>{movie?.title}</h1>
      <p>Actores: {movie?.actors}</p>
      <p>Géneros: {movie?.genre}</p>
      <div className={styles.buttons}>
        <Button onClick={reserveMovie} text={`Reserve ${movie.title} now`} />
        <Button onClick={addToCart} text="Add to cart" />
      </div>
    </div>
  );
};

export default MovieDetails;
