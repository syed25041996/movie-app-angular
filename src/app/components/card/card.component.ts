import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  popularMovies$ = this.popularApi.getPopularMovies();
  upcomingMovies$ = this.popularApi.getUpcomingMovies();

  constructor(private popularApi: MoviesService,private router: Router) {
    
  }

  ngOnInit(){
    
  }
  

}
