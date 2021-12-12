import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('http://www.omdbapi.com/?s=dragons&apikey=79e20939');
  }

  getMovie(movie:string){
    return this.http.get(`http://www.omdbapi.com/?s=${movie}&apikey=79e20939`)
  }

  getMovieByImdb(imdb:string){
    return this.http.get(`http://www.omdbapi.com/?i=${imdb}&apikey=79e20939`)
  }
}
