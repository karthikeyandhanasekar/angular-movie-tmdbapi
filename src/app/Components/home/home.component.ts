import { Component, OnInit } from '@angular/core';
import { Movies, ResultsEntity } from 'src/app/models/Home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movies: ResultsEntity[] = [] as ResultsEntity[]

  private imagepath: String = 'https://image.tmdb.org/t/p/w200'

  private currentdate: String  = new Date().toLocaleDateString().split('/').reverse().join('-')
  constructor(
    private homeservice: HomeService
  ) { }

  ngOnInit(): void {
    console.log( typeof this.currentdate);

    for (let index = 1; index < 10; ++index) {
      this.homeservice.getAll(index).subscribe((data: Movies) => {
        data.results?.map(ele => {
          ele.poster_path = `${this.imagepath + ele.poster_path}`
          ele.backdrop_path && this.movies.push(ele)
        })
      })
    }
  }

  public AllMovies(): ResultsEntity[] {
    return this.movies
  }










}
