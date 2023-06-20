const numberOfFilms = +prompt('How much films did you watch?', '');
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privan: false
};

const a = prompt('One of the lust watched film?', ''),
      b = prompt ('How do you like the film?', ''),
      c = prompt('One of the lust watched film?', ''),
      d = prompt ('How do you like the film?', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);