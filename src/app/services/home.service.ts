import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/Home';
import { MovieDetail } from '../models/MovieDetail';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpclient: HttpClient
  ) { }



  public getAll(pageno: number): Observable<Movies> {

    const url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.tmdbkey}&sort_by=release_date.desc&page=${pageno}`
    return this.httpclient.get<Movies>(url)
  }

  public movieDetails(id: number): Observable<MovieDetail> {
    const url: string = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.tmdbkey}`
    return this.httpclient.get<MovieDetail>(url)
  }
}
