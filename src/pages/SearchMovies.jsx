import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard/MovieCard.jsx';
import './search-movies.css';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [movieTrailer, setMovieTrailer] = useState(0);

    const searchMovies = async (event) => {
        event.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=bac014a37b60bdc52c9cb8d6d350135f&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results)
        } catch (err) {
            console.error(err);
        }
    }

    const getMovieTrailer = async (event) => {
        event.preventDefault();

        const url = `http://api.themoviedb.org/3/movie/${event.target.id}/videos?api_key=bac014a37b60bdc52c9cb8d6d350135f`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovieTrailer(data.results[0].key)
        } catch (err) {
            console.error(err);
        }
    }

    const getFirstMovieTrailer = async (firstMovieTrailerId) => {

        const trailerUrl = `http://api.themoviedb.org/3/movie/${firstMovieTrailerId}/videos?api_key=bac014a37b60bdc52c9cb8d6d350135f`;

        try {
            const response = await fetch(trailerUrl);
            const trailerData = await response.json();
            setMovieTrailer(trailerData.results[0].key)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        const getFirstMoviesList = async () => {
            const url = ` https://api.themoviedb.org/3/trending/movie/day?api_key=bac014a37b60bdc52c9cb8d6d350135f`;

            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
                getFirstMovieTrailer(data.results[0].id);
            } catch (err) {
                console.error(err);
            }
        }
        getFirstMoviesList();
    }, []);

    return (
        <div className="container">
            <div className="search-container">
                <h1 className="title">Search your Movie</h1>
                <form className="form" onSubmit={searchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input
                        className="input"
                        type="text"
                        name="query"
                        required
                        placeholder=" i.e Jurassic Park"
                        value={query}
                        onChange={((event) => {
                            setQuery(event.target.value)
                        })}
                    />
                    <button className="button" type="submit">Search</button>
                </form>
            </div>

            <div className="list-player-container">
                <div className="card-container">
                    <div className="card-list" >
                        {
                            movies.filter(movie => movie.poster_path).map((movie, index) => {
                                return (
                                    <MovieCard
                                        movie={movie}
                                        key={movie.id}
                                        getTrailer={getMovieTrailer}
                                        cardId={index}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <iframe title="trailers player"
                    src={`https://www.youtube.com/embed/${movieTrailer}`}
                >
                </iframe>
            </div>
        </div>
    )
};