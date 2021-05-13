import React, { useState } from 'react';
import MovieCard from '../components/MovieCard/MovieCard.jsx';
import './search-movies.css';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

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

    return (
        <div className="container">
            <h1 className="title">React Movie Search</h1>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    required
                    placeholder="i.e Juracic Park"
                    value={query}
                    onChange={((event) => {
                        setQuery(event.target.value)
                    })}
                />
                <button className="button" type="submit">Search</button>
            </form>

            <div className="card-list" >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
