import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieApiService } from './movie-api.service';
import { addMovies } from './state/movie.actions';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiservice: MovieApiService, private store: Store) {}

  getMovies() {
    this.apiservice
      .getMovies()
      .subscribe((movies) => this.store.dispatch(addMovies({ movies })));
  }
}
