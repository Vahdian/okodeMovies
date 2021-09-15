import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { 

  }

  getMovies(textIntroduced){
    return this.http.get<any>(`http://www.omdbapi.com/?s=${textIntroduced}&apikey=fbf39e7`)
  }

  getMovieDetail(textIntroduced){
    return this.http.get<any>(`http://www.omdbapi.com/?i=${textIntroduced}&apikey=fbf39e7`)
  }
}
