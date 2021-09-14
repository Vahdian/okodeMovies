import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie = [];
  constructor(private router: Router) {
  }

  ngOnInit() {
    const id = this.router.url.replace('/movies/', '')
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=fbf39e7`)
      .then((res) => res.json().then((res) => (this.movie = res)).then(res=>console.log(res)))
  }

}
