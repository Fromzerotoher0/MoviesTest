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
    this.MovieService.getMovies().subscribe((resp: any) => {

      this.dataSource = new MatTableDataSource(resp.Search);
      console.log(resp.Search);
    });
  }

  dataSource: any;
  displayedColumns: string[] = ['Title', 'Type', 'Year', 'imdbID', 'Poster'];


  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d:any, filter: string) => {
      const textToSearch = d[column] && d[column].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
