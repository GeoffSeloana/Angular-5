import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService } from '../movie.service';

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

  movies: Movie[];

  constructor(private movieService: MovieService) {

  }

  getMoviesFromService(): void {
    // this.movies = this.movieService.getMovies();

    this.movieService.getMovies().subscribe(updatedMovies => this.movies = updatedMovies);
  }

  ngOnInit() {
    this.getMoviesFromService();
  }

  onSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    // lert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

}
