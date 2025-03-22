import { useEffect, useState } from "react";
import classes from "./MovieDetail.module.css";
import Card from "../UI/Card/Card";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { useRouter } from "next/router";
import { MovieDetailProps, MovieDetails } from "@/types/interfaces";

const MovieDetail: React.FC<MovieDetailProps> = ({ imdbId }) => {
  console.log("imdbId", imdbId);
  const [movie, setMovie] = useState<MovieDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbId}&apikey=${API_KEY}`
        );

        const data = await response.json();

        console.log("data", data);

        setMovie(data);
      } catch (error) {
        console.error("Cannot fetch movie: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (imdbId) fetchMovie();
  }, [imdbId, API_KEY]);

  return (
    <>
      <div className={classes.movie}>
        <h1>Movie Details</h1>
        <Card>
          {isLoading && <p>Loading...</p>}
          {!isLoading && !movie && <p>Movie not found.</p>}
          {movie && (
            <div className={classes["movie__description"]}>
              {movie.Poster !== "N/A" && (
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={300}
                  height={300}
                  layout="intrinsic"
                />
              )}
              <div className={classes["movie__details"]}>
                <h2>{movie.Title}</h2>
                <p>
                  <strong>Duration:</strong> {movie.Runtime}
                </p>
                <p>
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Cast:</strong> {movie.Actors}
                </p>
                <p>
                  <strong>IMDb Rating:</strong> {movie.imdbRating}
                </p>
              </div>
            </div>
          )}
          <Button
            className={classes["goback-btn"]}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </Card>
      </div>
    </>
  );
};

export default MovieDetail;
