import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsEntity } from 'src/app/models/Home';
import { MovieDetail } from 'src/app/models/MovieDetail';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private movieid: number = 0
  public moviedetail: MovieDetail = {} as MovieDetail
  public similarmovies: ResultsEntity[] | null | undefined = [] as ResultsEntity[]
  private imagepath: String = 'https://image.tmdb.org/t/p/w200'
  public genres: String | undefined = ''
  constructor(
    private route: ActivatedRoute,
    private homeservice: HomeService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movieid = params['movieid']

      this.homeservice.movieDetails(this.movieid).subscribe((data) => {
        data.poster_path = this.imagepath + data.poster_path
        this.moviedetail = data
        this.genres = data.genres?.map(ele => ele.name).join(', ')
      })


      this.homeservice.SimilarityMovie('movie', this.movieid).subscribe((data) => {
        // console.log(data);
        data.results?.forEach(ele => {
          ele.poster_path = this.imagepath + ele.poster_path

        })

        this.similarmovies = data.results
      })
    })
    console.log(this.movieid);

  }
}
