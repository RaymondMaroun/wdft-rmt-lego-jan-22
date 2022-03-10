// src/components/MovieList.js

import { useState } from "react";

// import the array of movie objects
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";

function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            movie={movie}
            clickToDelete={deleteMovie}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
