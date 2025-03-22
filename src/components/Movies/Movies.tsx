import { useEffect, useState } from "react";
import classes from "./Movies.module.css";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { paginationActions } from "@/store/paginationSlice";
import Filters from "../Filters/Filters";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("Pokemon");
  const [releaseYear, setReleaseYear] = useState("");
  const [type, setType] = useState("");

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const dispatch = useDispatch();

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchMovie}&type=${type}&y=${releaseYear}&page=${currentPage}&apikey=${API_KEY}`
        );

        const data = await response.json();

        console.log("data", data);

        setMovies(data.Search || []);
        dispatch(paginationActions.setTotalElements(data.totalResults));
      } catch (error) {
        console.error("Cannot fetch movies: ", error);
      }
    };

    fetchMovies();
  }, [searchMovie, releaseYear, type, currentPage, API_KEY, dispatch]);

  return (
    <div className={classes.movies}>
      <h1>Movies</h1>
      <Filters
        searchMovie={searchMovie}
        onSearchMovie={setSearchMovie}
        releaseYear={releaseYear}
        onReleaseYear={setReleaseYear}
        type={type}
        onType={setType}
      />
      <Table movies={movies} />
      <Pagination />
    </div>
  );
};

export default Movies;
