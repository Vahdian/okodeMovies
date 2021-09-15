import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [];
  filterMovie = '';
  

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  getInput(val) {
    this.filterMovie = val;
    this.dataService.getMovies(val).subscribe(
      data => this.movies = data.Search,
      error => console.error("Movies couldn't be found", error)
    )
  }
}
