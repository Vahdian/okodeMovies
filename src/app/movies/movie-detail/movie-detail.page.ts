import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie = [];
  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    const id = this.router.url.replace('/movies/', '')
    this.dataService.getMovieDetail(id).subscribe(
      data => this.movie = data,
      error => console.error("Movies couldn't be found", error)
    )
  }

}
