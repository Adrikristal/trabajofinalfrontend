import { useNavigate } from "react-router-dom";
import { MoviesType } from "../../../data/movies";
import styles from "../../styles/pages/movie-details.module.scss";
import Button from "../Buttons/Button";
import { ROUTES, getAbsolutePath } from "../../utils/routes";

type Props = { movie: MoviesType };

const MovieDetails = (props: Props) => {
  const { movie } = props;
  const navigate = useNavigate();

  function reserveMovie() {
    navigate(getAbsolutePath(ROUTES.RESERVE));
  }

  function addToCart() {
    console.log("added to cart");
  }

  /*

  si reserve, move to complete reserve page

  reserve: cart list size === 1, show all movies in a list
  // usenavigate - react router
  
  si add to cart, add movie to cart list and show cart list in console

  get cart list - localstorage get
  push to cart list - array push
  console.log cart list - 

  */

  return (
    <div className={styles["movie-details"]}>
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

/*
not implemented code
  <img src={movie.poster} />
      <div>
        <span>Gallery</span>
        {movie.images.map((image) => (
          <img key={image} src={image} alt="image" />
        ))}
      </div>
*/
