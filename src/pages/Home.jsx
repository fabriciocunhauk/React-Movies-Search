import React, { useEffect, useState } from "react";
import GetMoviesForm from "../components/GetMoviesForm/GetMoviesForm.jsx";
import MoviesList from "../components/MoviesList/MoviesList.jsx";
import TrailerPlayer from "../components/TrailerPlayer/TrailerPlayer.jsx";

import "./home.css";

const apiToken = process.env.REACT_APP_TOKEN;

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState(0);
  const [trailerContainer, setTrailerContainer] = useState("");

  const fetchMovies = async (event) => {
    event.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiToken}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenTrailer = async (event) => {
    event.preventDefault();
    setTrailerContainer("flex");

    const moviesUrl = `http://api.themoviedb.org/3/movie/${event.target.id}/videos?api_key=${apiToken}`;

    try {
      const res = await fetch(moviesUrl);
      const data = await res.json();
      setMovieTrailer(data.results[0].key);
    } catch (err) {
      console.error(err);
    }
  };

  const getFirstMovieTrailer = async (firstMovieTrailerId) => {
    const trailerUrl = `http://api.themoviedb.org/3/movie/${firstMovieTrailerId}/videos?api_key=${apiToken}`;

    try {
      const response = await fetch(trailerUrl);
      const trailerData = await response.json();
      setMovieTrailer(trailerData.results[0].key);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getFirstMoviesList = async () => {
      const url = ` https://api.themoviedb.org/3/trending/movie/day?api_key=${apiToken}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        data.results ? setMovies(data.results) : setMovies([]);
        getFirstMovieTrailer(data.results[0].id);
      } catch (err) {
        console.error(err);
      }
    };
    getFirstMoviesList();
  }, []);

  function handleCloseButton() {
    setTrailerContainer("none");
  }

  return (
    <div className="container">
      <GetMoviesForm onClick={fetchMovies} query={query} setQuery={setQuery} />
      <div className="list-player-container">
        <MoviesList movies={movies} handleOpenTrailer={handleOpenTrailer} />
        <TrailerPlayer
          trailerContainer={trailerContainer}
          movieTrailer={movieTrailer}
          onClick={handleCloseButton}
        />
      </div>
    </div>
  );
}
