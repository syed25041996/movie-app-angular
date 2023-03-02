import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {

  popularMovies$ = this.api.getPopularMovies()

  constructor(private api: MoviesService, private router : Router){}

  ngOnInit(){}

  getMovie(movie : any){
    console.log(movie)
    localStorage.setItem("movie", JSON.stringify(movie))
    this.router.navigate(['movie',movie.id])
  }
}
