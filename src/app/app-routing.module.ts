import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';

// import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: 'movies', component: MoviesComponent}
  ];


@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
