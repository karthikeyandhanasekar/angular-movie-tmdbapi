import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsEntity } from 'src/app/models/Home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  public moviename: String = ''
  private imagepath: String = 'https://image.tmdb.org/t/p/w200'
  public searchresult: ResultsEntity[] | null | undefined = [] as ResultsEntity[]

  public displayoption: boolean = false

  constructor(
    private homeservice: HomeService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  onchange(): void {

    if (this.moviename === '')
      this.displayoption = false
    else {
      this.displayoption = true

      this.homeservice.SearchDetails(this.moviename).subscribe(data => {
        data.results?.forEach(ele => {
          ele.poster_path = this.imagepath + ele.poster_path
        })
        this.searchresult = data.results?.filter(ele => ele.media_type === "movie")
      })

    }
  }

  moviedetail(id: number) {

    this.moviename = ''
    this.displayoption = false


    this.router.navigate([`/MovieDetail/`],
      {
        queryParams: { movieid: id }
      }
    )

  }

}
