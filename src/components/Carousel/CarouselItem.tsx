import { Link } from "react-router-dom";
import { MoviesType } from "../../../data/movies";
import { getRandomNumber } from "../../utils/getRandomNumber";
import styles from "../../styles/components/carousel-item.module.scss";

type Props = {
  movie: MoviesType;
};

const CarouselItem = (props: Props) => {
  const { movie } = props;

  return (
    <li className={styles["carousel-item"]} key={movie.imdbId}>
      <Link to={`/detalle/${movie.imdbId}`}>
        <img src={movie.images[getRandomNumber(movie.images.length)]} alt="Image" />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default CarouselItem;
