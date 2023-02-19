import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {

  popularMovies$ = this.api.getPopularMovies()

  constructor(private api: MoviesService){}

  ngOnInit(){}
}
