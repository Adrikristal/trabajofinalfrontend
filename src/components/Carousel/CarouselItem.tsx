import { MoviesType } from "../../../data/movies";
import { getRandomNumber } from "../../utils/getRandomNumber";
import styles from "./carousel-item.module.scss";

type Props = {
  movie: MoviesType;
};

const CarouselItem = (props: Props) => {
  const { movie } = props;

  return (
    <li className={styles["carousel-item"]} key={movie.imdbId}>
      <img src={movie.images[getRandomNumber(movie.images.length)]} alt="Image" />
      <p>{movie.title}</p>
    </li>
  );
};

export default CarouselItem;
