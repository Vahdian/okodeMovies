import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/550?api_key=0064764b7eabf89ab50a1f9fe0f742e3'
      )
      .subscribe((res) => console.log(res));
  }
}
