import React from "react";
import { movies } from "../data";
import {nanoid} from 'nanoid';

function Movies() {
  const movieList = movies.map(movie =>{
    const genres = movie.genres.map(genre=> <li key={nanoid()}>{genre}</li>)
    return (
      <div key={movie.title}>
        <p>Title: {movie.title}</p>
        <p>Duration: {movie.time}</p>
        <ul>
          {genres}
        </ul>
      </div>

    );
  })
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
