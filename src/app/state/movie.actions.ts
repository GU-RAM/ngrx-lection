import { createAction, props } from '@ngrx/store';
import { Movie } from '../movie.model';

export const addMovies = createAction(
  '[Movie] adding to Movies',
  props<{ movies: Movie[] }>()
);
