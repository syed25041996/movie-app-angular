import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  popularMovies =
    this.baseUrl +
    'popular?api_key=3c7c65865469fccba5736ef25a3c69d2&language=en-US';
  upcomingMovies =
    this.baseUrl +
    'upcoming?api_key=3c7c65865469fccba5736ef25a3c69d2&language=en-US';
  topMovies =
    this.baseUrl +
    'top_rated?api_key=3c7c65865469fccba5736ef25a3c69d2&language=en-US';

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.httpClient.get(this.popularMovies);
  }
  getUpcomingMovies(): Observable<any> {
    return this.httpClient.get(this.upcomingMovies);
  }
  getTopMovies(): Observable<any> {
    return this.httpClient.get(this.topMovies)  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=3HHWUh6wLmX8AxHTGcQ7Q4uiEmicMCL8HL&language=en-US
