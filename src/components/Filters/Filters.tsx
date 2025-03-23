import { FiltersProps } from "@/types/interfaces";
import classes from "./Filters.module.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { paginationActions } from "@/store/paginationSlice";
import Button from "../UI/Button/Button";

const Filters: React.FC<FiltersProps> = ({ onFilter, initialSearch }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchRef.current) searchRef.current.value = initialSearch;
  }, [initialSearch]);

  const applyFiltersHandler = () => {
    const searchValue = searchRef.current?.value || "";
    const yearValue = yearRef.current?.value || "";
    const typeValue = typeRef.current?.value || "";

    dispatch(paginationActions.setCurrentPage(1));
    onFilter(searchValue, yearValue, typeValue);
  };

  return (
    <div className={classes.filters}>
      <input ref={searchRef} type="text" placeholder="Search movies..." />
      <input ref={yearRef} type="number" placeholder="Year" />
      <select ref={typeRef}>
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">TV Series</option>
        <option value="episode">Episodes</option>
      </select>
      <Button onClick={applyFiltersHandler}>Search</Button>
    </div>
  );
};

export default Filters;
