import { Component, OnInit } from '@angular/core';
import { Movies, ResultsEntity } from 'src/app/models/Home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {

  private movies: ResultsEntity[] = [] as ResultsEntity[]

  public isloading: boolean = true

  private imagepath: String = 'https://image.tmdb.org/t/p/w200'

  constructor(
    public homeservice: HomeService
  ) { }

  ngOnInit(): void {
    document.title = "Upcomming"

    for (let index = 1; index < 10; ++index) {
      this.homeservice.getUpcomming(index).subscribe((data: Movies) => {
        data.results?.map(ele => {
          ele.poster_path = `${this.imagepath + ele.poster_path}`
          ele.backdrop_path && this.movies.push(ele)
        })
      })
    }
    this.isloading = false
  }
  public AllMovies(): ResultsEntity[] {
    return this.movies
  }

}
