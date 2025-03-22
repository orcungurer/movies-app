import { useEffect, useState } from "react";
import classes from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("Pokemon");
  const [releaseYear, setReleaseYear] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchMovie}&type=${type}&y=${releaseYear}&page=${page}&apikey=${API_KEY}`
        );

        const data = await response.json();

        console.log("data", data);

        setMovies(data.Search || []);
      } catch (error) {
        console.error("Cannot fetch movies: ", error);
      }
    };

    fetchMovies();
  }, [searchMovie, releaseYear, type, page, API_KEY]);

  return (
    <div className={classes.movies}>
      <div className={classes.header}>
        <h1 className={classes["header__title"]}>Movies</h1>
      </div>
      <div className={classes.filters}></div>
      <div className={classes.list}></div>
      <div className={classes.pagination}></div>
    </div>
  );
};

export default Movies;
