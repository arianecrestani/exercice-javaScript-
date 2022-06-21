const favouriteItems = [
  { id: 32, name: "bla" },
  { id: 42, name: "bleee" },
  { id: 36, name: "bloooo" },
  { id: 322, name: "bluuuu" },
];

const card = { id: 42, name: "bleee" };

const isCardInFavouriteItems = (card) => {
  const result = favouriteItems.find((item) => item.id === card.id);
  return result !== undefined;
};

console.log(isCardInFavouriteItems(card));

const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6,
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0,
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4,
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5,
  },
];

// Get movie titles
const titles = (movies) => {
  const titles = [];
  for (const movie of movies) {
    titles.push(movie.title);
  }
  return titles;
};
console.log(titles(movieList));

const titles = [];
for (const movie of movieList) {
  titles.push(movie.title);
}
console.log(titles);

const titles = movieList
  .filter(({ title }) => title.includes("ba"))
  .map(({ title }) => title);
console.log(titles);

//Get titles of movies with an IMDB rating greater or equal to 7.0

const bestTitles = [];
for (const movie of movieList) {
  if (movie.imdbRating >= 7.0) {
    bestTitles.push(movie.title);
  }
}
console.log(bestTitles);

const bestTitles = movieList.filter(({ imdbRating }) => imdbRating >= 7.0).map(({ title }) => title);

console.log(bestTitles);

//Count movies by Christopher Nolan
const nolanMovieList = [];
for (const movie of movieList) {
  if (movie.director === "Christopher Nolan") {
    nolanMovieList.push(movie);
  }
}
console.log(
  "There are " +
    nolanMovieList.length +
    " Christopher Nolan movies in the list."
);



// Compute average movie rating of Christopher Nolan's movies
let ratingSum = 0;
let averageRating = 0;

for (const movie of movieList) {
  ratingSum += movie.imdbRating;
}
averageRating = ratingSum / nolanMovieList.length;
console.log(averageRating);

// the same

const nolanMovieList = movieList.filter(
  ({ director }) => director === "Christopher Nolan"
);
const ratingSum = movieList.reduce(
  (previousValue, { imdbRating }) => imdbRating + previousValue,
  0
);
console.log(ratingSum);
const averageRating = ratingSum / nolanMovieList.length;

console.log(averageRating);
// Return a new array containing only movie titles

const titles = movies => movies.map(movie => movie.title)

console.log(titles(movieList));


//

// Filter movies by IMDB rating, then creates a movie titles array
const bestTitles = movies =>  movies.filter((movie) => movie.imdbRating >= 7.5).map((movie) => movie.title);

console.log(bestTitles(movieList));

const joelSchumacher = movies => movies.filter(({ director }) => director === "Joel Schumacher").map(({ title }) => title)
console.log(joelSchumacher(movieList))

const olderMovies = movies => movies.filter(({ year }) => year <= 2000).map(({ title }) => title)
console.log(olderMovies(movieList))
