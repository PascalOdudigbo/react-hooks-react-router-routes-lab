import React from "react";
import { directors } from "../data";
import {nanoid} from 'nanoid';

function Directors() {
  const directorsList = directors.map(director =>{
    const movies = director.movies.map(movie=> <li key={nanoid()}>{movie}</li>)
    return (
      <div key={director.name}>
        {director.name}
        <ul>
          {movies}
        </ul>
      </div>

    );
  })
  return <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>;
}

export default Directors;
