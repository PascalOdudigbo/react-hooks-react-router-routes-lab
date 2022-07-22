import React from "react";
import { actors } from "../data";
import {nanoid} from 'nanoid';

function Actors() {
  const actorsList = actors.map(actor =>{
    const movies = actor.movies.map(movie=> <li key={nanoid()}>{movie}</li>)
    return (
      <div key={actor.name}>
        {actor.name}
        <ul>
          {movies}
        </ul>
      </div>

    );
  })

  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
