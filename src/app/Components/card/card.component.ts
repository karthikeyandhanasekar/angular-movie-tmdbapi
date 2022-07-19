import { Component, Input, OnInit } from '@angular/core';
import { ResultsEntity } from 'src/app/models/Home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  //get value from parent value
  @Input() data: ResultsEntity = {} as ResultsEntity

  public genres: string | undefined = ''
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  protected showDetails(data: number): void {

    this.router.navigate([`/MovieDetail/`],
      {
        queryParams: { movieid: data }
      }
    )

  }
}
