import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap, take, tap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  popularMovies$ = this.popularApi.getPopularMovies();
  upcomingMovies$ = this.popularApi.getUpcomingMovies();
  topMovies$ = this.popularApi.getTopMovies();
  public title!: string;
  movies!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private popularApi: MoviesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.title = params['category'];
      const moviesAPI : any = {
        'popular': this.popularMovies$,
        'upcoming': this.upcomingMovies$,
        'top-rated': this.topMovies$
      };
      this.movies = moviesAPI[this.title]
    });
  }
}
