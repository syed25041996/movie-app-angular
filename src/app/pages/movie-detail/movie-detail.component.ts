import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  currentMovieDetail : any

  ngOnInit(){
    this.currentMovieDetail = JSON.parse(localStorage.getItem("movie")!)
    console.log(this.currentMovieDetail)
  }
}
