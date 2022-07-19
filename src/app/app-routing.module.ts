import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';
import { UpcommingComponent } from './Components/upcomming/upcomming.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "Upcomming", component: UpcommingComponent },
  { path: "TopRated", component: TopRatedComponent },
  { path: "MovieDetail", component: MovieDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
