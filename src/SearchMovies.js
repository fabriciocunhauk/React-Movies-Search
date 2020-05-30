import React from 'react';

export default function SearchMovies() {
    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e Juracic Park" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}