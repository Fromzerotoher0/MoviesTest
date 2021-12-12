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

  dataSource: any;
  touched = 'no';
  displayedColumns: string[] = ['Title', 'Type', 'Year', 'imdbID', 'Poster'];

  searchMovie(movie:string){
    this.movieService.getMovie(movie).subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp.Search);
      this.touched = 'yes'
    })
  }


}
