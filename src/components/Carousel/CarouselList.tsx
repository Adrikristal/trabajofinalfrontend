import { MovieType, MoviesType, moviesData } from "../../../data/movies";
import styles from "./../../styles/components/carousel-list.module.scss";
import CarouselItem from "./CarouselItem";

const CarouselList = () => {
  const movies = moviesData.filter((movie) => movie.type === MovieType.Movie);
  const tvShows = moviesData.filter((movie) => movie.type !== MovieType.Movie);
  return (
    <div className={styles["carousel-list"]}>
      <div className={styles["carousel-wrapper"]}>
        <h2>Movies</h2>
        <ul>
          {movies.map((item) => (
            <CarouselItem key={item.imdbId} movie={item as unknown as MoviesType} />
          ))}
        </ul>
      </div>
      <div className={styles["carousel-wrapper"]}>
        <h2>TV Shows</h2>
        <ul>
          {tvShows.map((item) => (
            <CarouselItem movie={item as unknown as MoviesType} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarouselList;
