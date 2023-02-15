import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  popularMovies$ = this.popularApi.getPopularMovies();

  constructor(private popularApi: MoviesService) {
    
  }

}
