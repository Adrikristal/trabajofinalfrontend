export interface MoviesType {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  pplot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdbrating: string;
  imdbvotes: string;
  imdbId: string;
  type: MovieType;
  response: MovieResponse;
  images: string[];
  totalSeasons?: string;
  comingSoon?: boolean;
}

export enum MovieResponse {
  True = "True",
}

export enum MovieType {
  Movie = "movie",
  Series = "series",
}

export const moviesData = [
  {
    title: "Avatar",
    year: "2009",
    rated: "PG-13",
    released: "18 Dec 2009",
    runtime: "162 min",
    genre: "Action, Adventure, Fantasy",
    director: "James Cameron",
    writer: "James Cameron",
    actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    language: "English, Spanish",
    country: "USA, UK",
    awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    metascore: "83",
    imdbrating: "7.9",
    imdbvotes: "890,617",
    imdbId: "tt0499549",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    ],
  },
  {
    title: "I Am Legend",
    year: "2007",
    rated: "PG-13",
    released: "14 Dec 2007",
    runtime: "101 min",
    genre: "Drama, Horror, Sci-Fi",
    director: "Francis Lawrence",
    writer:
      "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
    actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    plot: "years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    language: "English",
    country: "USA",
    awards: "9 wins & 21 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
    metascore: "65",
    imdbrating: "7.2",
    imdbvotes: "533,874",
    imdbId: "tt0480249",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg",
    ],
  },
  {
    title: "300",
    year: "2006",
    rated: "R",
    released: "09 Mar 2007",
    runtime: "117 min",
    genre: "Action, Drama, Fantasy",
    director: "Zack Snyder",
    writer:
      "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
    actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    language: "English",
    country: "USA",
    awards: "16 wins & 42 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    metascore: "52",
    imdbrating: "7.7",
    imdbvotes: "611,046",
    imdbId: "tt0416449",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
    ],
  },
  {
    title: "The Avengers",
    year: "2012",
    rated: "PG-13",
    released: "04 May 2012",
    runtime: "143 min",
    genre: "Action, Sci-Fi, Thriller",
    director: "Joss Whedon",
    writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
    actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    language: "English, Russian",
    country: "USA",
    awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
    metascore: "69",
    imdbrating: "8.1",
    imdbvotes: "1,003,301",
    imdbId: "tt0848228",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    ],
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    rated: "R",
    released: "25 Dec 2013",
    runtime: "180 min",
    genre: "Biography, Comedy, Crime",
    director: "Martin Scorsese",
    writer: "Terence Winter (screenplay), Jordan Belfort (book)",
    actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    language: "English, French",
    country: "USA",
    awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    metascore: "75",
    imdbrating: "8.2",
    imdbvotes: "786,985",
    imdbId: "tt0993846",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg",
    ],
  },
  {
    title: "Interstellar",
    year: "2014",
    rated: "PG-13",
    released: "07 Nov 2014",
    runtime: "169 min",
    genre: "Adventure, Drama, Sci-Fi",
    director: "Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan",
    actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    language: "English",
    country: "USA, UK",
    awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    metascore: "74",
    imdbrating: "8.6",
    imdbvotes: "937,412",
    imdbId: "tt0816692",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    ],
  },
  {
    title: "Game of Thrones",
    year: "2011–",
    rated: "TV-MA",
    released: "17 Apr 2011",
    runtime: "56 min",
    genre: "Adventure, Drama, Fantasy",
    director: "N/A",
    writer: "David Benioff, D.B. Weiss",
    actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
    plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
    language: "English",
    country: "USA, UK",
    awards: "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "9.5",
    imdbvotes: "1,046,830",
    imdbId: "tt0944947",
    type: "series",
    totalSeasons: "7",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    ],
  },
  {
    title: "Vikings",
    year: "2013–",
    rated: "TV-14",
    released: "03 Mar 2013",
    runtime: "44 min",
    genre: "Action, Drama, History",
    director: "N/A",
    writer: "Michael Hirst",
    actors: "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
    plot: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
    language: "English, Old English, Norse, Old, Latin",
    country: "Ireland, Canada",
    awards: "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "8.6",
    imdbvotes: "198,041",
    imdbId: "tt2306299",
    type: "series",
    totalSeasons: "5",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
    ],
  },
  {
    title: "Gotham",
    year: "2014–",
    rated: "TV-14",
    released: "01 Aug 2014",
    runtime: "42 min",
    genre: "Action, Crime, Drama",
    director: "N/A",
    writer: "Bruno Heller",
    actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
    plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    language: "English",
    country: "USA",
    awards: "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "8.0",
    imdbvotes: "133,375",
    imdbId: "tt3749900",
    type: "series",
    totalSeasons: "3",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
    ],
  },
  {
    title: "Power",
    year: "2014–",
    rated: "TV-MA",
    released: "N/A",
    runtime: "50 min",
    genre: "Crime, Drama",
    director: "N/A",
    writer: "Courtney Kemp Agboh",
    actors: "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
    plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
    language: "English",
    country: "USA",
    awards: "1 win & 6 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "8.0",
    imdbvotes: "14,770",
    imdbId: "tt3281796",
    type: "series",
    totalSeasons: "3",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
    ],
  },
  {
    title: "Narcos",
    year: "2015–",
    rated: "TV-MA",
    released: "28 Aug 2015",
    runtime: "49 min",
    genre: "Biography, Crime, Drama",
    director: "N/A",
    writer: "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
    actors: "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
    plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
    language: "English, Spanish",
    country: "USA",
    awards: "Nominated for 2 Golden Globes. Another 4 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "8.9",
    imdbvotes: "118,680",
    imdbId: "tt2707408",
    type: "series",
    totalSeasons: "2",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    ],
  },
  {
    title: "Breaking Bad",
    year: "2008–2013",
    rated: "TV-14",
    released: "20 Jan 2008",
    runtime: "49 min",
    genre: "Crime, Drama, Thriller",
    director: "N/A",
    writer: "Vince Gilligan",
    actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
    plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
    language: "English, Spanish",
    country: "USA",
    awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "9.5",
    imdbvotes: "889,883",
    imdbId: "tt0903747",
    type: "series",
    totalSeasons: "5",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    ],
  },
  {
    comingSoon: true,
    title: "Doctor Strange",
    year: "2016",
    rated: "N/A",
    released: "04 Nov 2016",
    runtime: "N/A",
    genre: "Action, Adventure, Fantasy",
    director: "Scott Derrickson",
    writer:
      "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
    actors: "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
    plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    language: "English",
    country: "USA",
    awards: "N/A",
    poster: "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "N/A",
    imdbvotes: "N/A",
    imdbId: "tt1211837",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg",
    ],
  },
  {
    comingSoon: true,
    title: "Rogue One: A Star Wars Story",
    year: "2016",
    rated: "N/A",
    released: "16 Dec 2016",
    runtime: "N/A",
    genre: "Action, Adventure, Sci-Fi",
    director: "Gareth Edwards",
    writer:
      "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
    actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
    plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
    language: "English",
    country: "USA",
    awards: "1 nomination.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    metascore: "N/A",
    imdbrating: "N/A",
    imdbvotes: "N/A",
    imdbId: "tt3748528",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    ],
  },
  {
    comingSoon: true,
    title: "Assassin's Creed",
    year: "2016",
    rated: "N/A",
    released: "21 Dec 2016",
    runtime: "N/A",
    genre: "Action, Adventure, Fantasy",
    director: "Justin Kurzel",
    writer: "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
    actors: "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
    plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
    language: "English",
    country: "UK, France, USA, Hong Kong",
    awards: "N/A",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "N/A",
    imdbvotes: "N/A",
    imdbId: "tt2094766",
    type: "movie",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
    ],
  },
  {
    comingSoon: true,
    title: "Luke Cage",
    year: "2016–",
    rated: "TV-MA",
    released: "30 Sep 2016",
    runtime: "55 min",
    genre: "Action, Crime, Drama",
    director: "N/A",
    writer: "Cheo Hodari Coker",
    actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
    plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
    language: "English",
    country: "USA",
    awards: "N/A",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
    metascore: "N/A",
    imdbrating: "N/A",
    imdbvotes: "N/A",
    imdbId: "tt3322314",
    type: "series",
    totalSeasons: "1",
    response: "True",
    images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg",
    ],
  },
];

// This data has been created by jsondataai.com
