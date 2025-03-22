export interface FiltersProps {
  searchMovie: string;
  onSearchMovie: (value: string) => void;
  releaseYear: string;
  onReleaseYear: (value: string) => void;
  type: string;
  onType: (value: string) => void;
}

export interface MovieDetailProps {
  imdbId?: string;
}

export interface MovieDetails {
  Title: string;
  Poster: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  imdbRating: string;
}

export interface Movie {
  Title: string;
  imdbID: string;
  Year: string;
  Type: string;
}

export interface TableProps {
  movies: Movie[];
}
