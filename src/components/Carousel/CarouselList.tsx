import { MovieType, MoviesType, moviesData } from "../../../data/movies";
import CarouselItem from "./CarouselItem";
import styles from "./carousel-list.module.scss";

// type Props = {
//   data: string[];
// };

const CarouselList = () =>
  // props: Props
  {
    //   const { data } = props;
    const movies = moviesData.filter((movie) => movie.type === MovieType.Movie);
    // const tvShows = moviesData.filter((movie) => movie.type !== MovieType.Movie);
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
        {/* <div className={styles["carousel-wrapper"]}>
          <h2>TV Shows</h2>
          <ul>
            {tvShows.map((item) => (
              <CarouselItem movie={item} />
            ))}
          </ul>
        </div> */}
      </div>
    );
  };

export default CarouselList;
