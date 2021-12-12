import { Component} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent{

  constructor(private movieService:MoviesService,private activatedRoute:ActivatedRoute) {
    // obtener el id de la pelicula de la url
    this.imdb = this.activatedRoute.snapshot.params['id'];
    // servicio para obtener una pelicula por su id
    this.movieService.getMovieByImdb(this.imdb).subscribe(resp =>{
      this.movie = resp;
    })
   }

   imdb:string = '';
   movie:any;
}
