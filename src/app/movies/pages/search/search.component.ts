import { Component} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private movieService:MoviesService) { }

  // fuente de datos para material table
  dataSource: any;
  // variable para determinar si se ha realizado una busqueda
  touched = 'no';
  // declaracion de las columnas de la tabla
  displayedColumns: string[] = ['Title', 'Type', 'Year', 'imdbID', 'Poster'];

  searchMovie(movie:string){
    // servicio para obtener un listado de peliculas de acuerdo a su titulo
    this.movieService.getMovie(movie).subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp.Search);
      this.touched = 'yes'
    })
  }


}
