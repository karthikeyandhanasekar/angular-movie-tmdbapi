import { Component, Input, OnInit } from '@angular/core';
import { ResultsEntity } from 'src/app/models/Home';
import { MovieDetail } from 'src/app/models/MovieDetail';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  //get value from parent value
  @Input() data: ResultsEntity = {} as ResultsEntity

  private moviedetail: MovieDetail = {} as MovieDetail
  public genres: string  | undefined  = ''
  constructor(
    private homeservice: HomeService
  ) { }

  ngOnInit(): void {
    this.homeservice.movieDetails(this.data.id).subscribe((data: MovieDetail) => {
      this.moviedetail = data
      this.genres = data.genres?.map(ele=>ele.name).join(',')
    })

  }

}
