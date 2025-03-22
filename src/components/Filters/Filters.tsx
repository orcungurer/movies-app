import { FiltersProps } from "@/types/interfaces";
import classes from "./Filters.module.css";

const Filters: React.FC<FiltersProps> = ({
  searchMovie,
  onSearchMovie,
  releaseYear,
  onReleaseYear,
  type,
  onType,
}) => {
  return (
    <div className={classes.filters}>
      <input
        type="text"
        value={searchMovie}
        onChange={(e) => onSearchMovie(e.target.value)}
        placeholder="Search movies..."
      />

      <input
        type="number"
        value={releaseYear}
        onChange={(e) => onReleaseYear(e.target.value)}
        placeholder="Year"
      />

      <select value={type} onChange={(e) => onType(e.target.value)}>
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">TV Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
};

export default Filters;
