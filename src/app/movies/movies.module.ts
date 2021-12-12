import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [ListComponent, SearchComponent, HomeComponent, ImagePipe, MovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class MoviesModule {}
