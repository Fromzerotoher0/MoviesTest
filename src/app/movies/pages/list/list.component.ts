import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent{
  constructor(private MovieService: MoviesService) {
    //servicio para obtener las peliculas
    this.MovieService.getMovies().subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource(resp.Search);
    });
  }
  // fuente de datos para la tabla
  dataSource: any;
  // declaracion de las columnas de la tabla
  displayedColumns: string[] = ['Title', 'Type', 'Year', 'imdbID', 'Poster'];
  //funcion para filtrar las peliculas obtenidas
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
