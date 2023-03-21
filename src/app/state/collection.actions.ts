import { createAction, props } from '@ngrx/store';
import { Movie } from '../movie.model';

export const addToCollection = createAction(
  '[Collection] adding to collection',
  props<{ movie: Movie }>()
);
