import { Movie } from '../movie.model';

export interface Appstate {
  movies: Movie[];
  collection: Movie[];
}
