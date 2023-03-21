import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { addToCollection } from './state/collection.actions';
import { selectCollection } from './state/collection.selectors';
import { selectMovies } from './state/movie.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies$ = this.store.select(selectMovies);
  collection$ = this.store.select(selectCollection);

  constructor(private movieService: MovieService, private store: Store) {}

  addToCollection(movie: Movie) {
    // this.movieService.addToCollection(movie);
    this.store.dispatch(addToCollection({ movie }));
  }

  ngOnInit() {
    this.movieService.getMovies();
  }
}
