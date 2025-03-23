export interface FiltersProps {
  onFilter: (search: string, year: string, type: string) => void;
  initialSearch: string;
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
