import React from "react";
import "./get-movies-form.css";

function GetMoviesForm({ onClick, query, setQuery }) {
  return (
    <div className="search-container">
      <h1 className="title">Search your Movie</h1>
      <form className="form" onSubmit={onClick}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          required
          placeholder=" i.e Jurassic Park"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default GetMoviesForm;
