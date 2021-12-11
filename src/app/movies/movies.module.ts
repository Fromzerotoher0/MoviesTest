import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ListComponent, SearchComponent, HomeComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class MoviesModule {}