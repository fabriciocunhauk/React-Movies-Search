import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./MovieList.css";

function MoviesList({ movies, onClick }) {
  return (
    <div className="card-container">
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie, index) => {
            return (
              <MovieCard
                movie={movie}
                key={movie.id}
                onClick={onClick}
                cardId={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MoviesList;
