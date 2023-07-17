import React, { useContext } from "react";
import { TrailersContext } from "../context/trailersContext.js";
import GetMoviesForm from "../components/GetMoviesForm/GetMoviesForm.jsx";
import MoviesList from "../components/MoviesList/MoviesList.jsx";
import TrailerPlayer from "../components/TrailerPlayer/TrailerPlayer.jsx";

import "./home.css";

export default function Home() {
  const {
    trailers,
    openTrailer,
    fetchMovieTrailers,
    handleOpenTrailer,
    setCloseTrailerContainer,
    closeTrailerContainer,
    setQueryTrailer,
    queryTrailer,
  } = useContext(TrailersContext);

  return (
    <div className="container">
      <GetMoviesForm onClick={fetchMovieTrailers} queryTrailer={queryTrailer} setQueryTrailer={setQueryTrailer} />
      <div className="list-player-container">
        <MoviesList movies={trailers} handleOpenTrailer={handleOpenTrailer} />
        <TrailerPlayer
          closeTrailerContainer={closeTrailerContainer}
          movieTrailer={openTrailer}
          onClick={() => setCloseTrailerContainer(true)}
        />
      </div>
    </div>
  );
}
