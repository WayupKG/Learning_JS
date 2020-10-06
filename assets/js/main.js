"use strict";
 

// Урок 1

const nubmerOfFilms = +prompt('Сколько фильмов вы посмотрели?', '1, 2, 3');

const personsMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
    
personsMovieDB.movies[a] = b;
personsMovieDB.movies[c] = d;

console.log(personsMovieDB);