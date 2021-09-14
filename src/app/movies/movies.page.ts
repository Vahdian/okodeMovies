import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  hello = 'hellow';
  movies = [];
  filterMovie = '';
  getInput(val) {
    console.warn(val);
    this.filterMovie = val;
    fetch(`http://www.omdbapi.com/?s=${this.filterMovie}&apikey=fbf39e7`)
      .then((res) => res.json().then((res) => (this.movies = res.Search)))
      .then((res) => console.log(res));
  }

  constructor() {}

  ngOnInit() {}
}
