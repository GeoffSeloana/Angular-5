import { Injectable } from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from '../models/movie';

// Get data asynchronously with observable.
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// MessageService
import { MessageService } from './message.service';

@Injectable()
export class MovieService {


  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Get movie List`)
    return of(fakeMovies);
  }


  constructor(public messageService: MessageService) { }

}
