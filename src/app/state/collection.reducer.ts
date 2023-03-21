import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movie.model';
import { addToCollection } from './collection.actions';

const initialState: Movie[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(addToCollection, (state, { movie }) => [...state, movie])
);
