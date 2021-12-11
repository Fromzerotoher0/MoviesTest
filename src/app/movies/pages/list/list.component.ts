import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private MovieService: MoviesService) {
    this.MovieService.getMovies().subscribe((resp: any) => {
      console.log(resp.Search);
      this.movies = resp.Search;
    });
  }

  movies: any;

  ngOnInit(): void {}
}
