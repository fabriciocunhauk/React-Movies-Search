import { createContext, useEffect, useState } from "react";

const apiToken = process.env.REACT_APP_TOKEN;

export const TrailersContext = createContext(null);

export const TrailersProvider = ({ children }) => {
  const [trailers, setTrailers] = useState([]);
  const [openTrailer, setOpenTrailer] = useState(0);
  const [closeTrailerContainer, setCloseTrailerContainer] = useState(true);
  const [queryTrailer, setQueryTrailer] = useState("");

  const fetchMovieTrailers = async (event) => {
    event.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiToken}&language=en-US&query=${queryTrailer}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      !data ? setTrailers([]) : setTrailers(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenTrailer = async (event) => {
    event.preventDefault();
    setCloseTrailerContainer(false);

    const moviesUrl = `http://api.themoviedb.org/3/movie/${event.target.id}/videos?api_key=${apiToken}`;

    try {
      const res = await fetch(moviesUrl);
      const data = await res.json();
      setOpenTrailer(data.results[0].key);
    } catch (err) {
      console.error(err);
    }
  };

  const getFirstMovieTrailer = async (firstMovieTrailerId) => {
    const trailerUrl = `http://api.themoviedb.org/3/movie/${firstMovieTrailerId}/videos?api_key=${apiToken}`;

    try {
      const response = await fetch(trailerUrl);
      const trailerData = await response.json();
      setOpenTrailer(trailerData.results[0].key);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getFirstMovieTrailerList = async () => {
      const url = ` https://api.themoviedb.org/3/trending/movie/day?api_key=${apiToken}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        data.results ? setTrailers(data.results) : setTrailers([]);
        getFirstMovieTrailer(data.results[0].id);
      } catch (err) {
        console.error(err);
      }
    };
    getFirstMovieTrailerList();
  }, []);

  return (
    <TrailersContext.Provider
      value={{
        trailers,
        openTrailer,
        fetchMovieTrailers,
        handleOpenTrailer,
        setCloseTrailerContainer,
        closeTrailerContainer,
        setQueryTrailer,
        queryTrailer,
      }}
    >
      {children}
    </TrailersContext.Provider>
  );
};
