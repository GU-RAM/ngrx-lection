import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../movie.model';

export const selectCollection = createFeatureSelector<Movie[]>('collection');
