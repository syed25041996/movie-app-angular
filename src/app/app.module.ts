import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesService } from './services/movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopularComponent } from './pages/movies/popular/popular.component';
import { TopRatedComponent } from './pages/movies/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/movies/upcoming/upcoming.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    ErrorComponent,
    HeaderComponent,
    PopularComponent,
    UpcomingComponent,
    TopRatedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
