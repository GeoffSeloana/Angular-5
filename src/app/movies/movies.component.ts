import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {fakeMovies} from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1977
  };

  // Action when selecting a movie item on a list
  selectedMovie: Movie;

  movies = fakeMovies;

  constructor() { }

  ngOnInit() {
  }

  onSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    // lert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

}
