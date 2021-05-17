import React from 'react';
import './movie-card.css';

export default function MovieCard({ movie, getTrailer, cardId }) {

    function handleMouseEnter() {
        const overlayHover = document.querySelectorAll('.overlay-hover');
        overlayHover.forEach((overlay, overlayIndex) => {
            if (overlayIndex === cardId) {
                overlay.style.opacity = 0.8;
            }
        })
    }

    function handleMouseLeave() {
        const overlayHover = document.querySelectorAll('.overlay-hover');
        overlayHover.forEach((overlay, overlayIndex) => {
            if (overlayIndex === cardId) {
                overlay.style.opacity = 0;
            }
        })
    }

    return (
        <div className="card" id={cardId}>
            <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div
                onClick={getTrailer}
                id={movie.id}
                className="overlay-hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></div>
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
    )
};