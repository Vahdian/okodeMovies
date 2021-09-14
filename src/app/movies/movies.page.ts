import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  hello = 'hellow';
  movies = [
    { id: '001', title: 'Blade Runner', year: '2021' },
    { id: '002', title: 'Simbad', year: '2009' },
    { id: '003', title: 'Matrix', year: '1999' },
  ];
  filterMovie = "batman"
  

  constructor() {
    
  }

  ngOnInit() {
    fetch(`http://www.omdbapi.com/?s=${this.filterMovie}&apikey=fbf39e7`).then((res) =>
      res.json().then((res) =>
      this.movies = res.Search
      )
    ).then(res=> console.log(res));
  }
}
