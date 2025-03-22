import Link from "next/link";
import Card from "../UI/Card/Card";
import classes from "./Table.module.css";
import { TableProps } from "@/types/interfaces";

const Table: React.FC<TableProps> = ({ movies }) => {
  console.log("movies", movies);
  return (
    <Card>
      <div className={classes["table__container"]}>
        <table className={classes.table}>
          <thead>
            <tr className={classes["table__row"]}>
              <th className={classes["table__header"]}>Name</th>
              <th className={classes["table__header"]}>Release Date</th>
              <th className={classes["table__header"]}>IMDb ID</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.imdbID} className={classes["table__row"]}>
                <td className={classes["table__cell"]}>
                  <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
                </td>
                <td className={classes["table__cell"]}>{movie.Year}</td>
                <td className={classes["table__cell"]}>{movie.imdbID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
