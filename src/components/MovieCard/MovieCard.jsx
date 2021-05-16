import React from 'react';
import youtubeIcon from '../../assets/images/youtube-brands.svg';
import './movie-card.css';

export default function MovieCard({ movie, getTrailer }) {

    function handleMouseEnter() {
        const overlayHover = document.querySelector('.overlay-hover');
        console.log(overlayHover);
        overlayHover.style.opacity = 0.8;
    }

    function handleMouseLeave() {
        const overlayHover = document.querySelector('.overlay-hover');
        overlayHover.style.opacity = 0;
    }

    return (
        <div className="card" id={movie.id}>
            <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                onClick={getTrailer}

            />
            <div
                className="overlay-hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={youtubeIcon} alt="youtube icon" />
            </div>
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
    )
};
