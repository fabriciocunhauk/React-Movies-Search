import React from "react";
import "./get-movies-form.css";

function GetMoviesForm({ onClick, queryTrailer, setQueryTrailer }) {
  return (
    <div className="search-container">
      <h1 className="title">Search your Movie Trailer</h1>
      <form className="form" onSubmit={onClick}>
        <label className="label" htmlFor="queryTrailer">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="queryTrailer"
          required
          placeholder=" i.e Jurassic Park"
          value={queryTrailer}
          onChange={(event) => {
            setQueryTrailer(event.target.value);
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
