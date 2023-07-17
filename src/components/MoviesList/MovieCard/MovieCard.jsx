import React from "react";
import "./movie-card.css";

export default function MovieCard({ movie, onClick, cardId }) {
  function handleMouseEnter() {
    const overlayHover = document.querySelectorAll(".overlay-hover");
    overlayHover.forEach((overlay, overlayIndex) => {
      if (overlayIndex === cardId) {
        overlay.style.opacity = 0.8;
      }
    });
  }

  function handleMouseLeave() {
    const overlayHover = document.querySelectorAll(".overlay-hover");
    overlayHover.forEach((overlay, overlayIndex) => {
      if (overlayIndex === cardId) {
        overlay.style.opacity = 0;
      }
    });
  }

  return (
    <div className="card" id={cardId}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div
        onClick={onClick}
        id={movie.id}
        className="overlay-hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="card--content">
        <h2 className="card--title">{movie.title}</h2>
        <h3>RELEASE DATE: {movie.release_date}</h3>
        <h3>RATING: {movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
