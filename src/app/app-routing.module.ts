import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PopularComponent } from './pages/movies/popular/popular.component';
import { TopRatedComponent } from './pages/movies/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/movies/upcoming/upcoming.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'movies', children:[
    {path:'', component:PopularComponent},
    {path:'popular', component:PopularComponent},
    {path:'upcoming', component:UpcomingComponent},
    {path:'top-rated', component:TopRatedComponent},
  ] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
