import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { async, map, take } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  popularMovies$ = this.popularApi.getPopularMovies();
  showNavigationArrows = false;
	showNavigationIndicators = false;

  constructor(private popularApi: MoviesService, config : NgbCarouselConfig) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
  }

  images: string[] = [];
  randomNumber : number = Math.floor(Math.random() * 10)

  ngOnInit() {
    this.popularMovies$.subscribe((res) =>
      res['results'].forEach((element: any) => {
        this.images.push(element.backdrop_path)
        console.log(this.images)
      })
      );
      console.log(this.randomNumber)

    console.log(this.images);
  }
}
