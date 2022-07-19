import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './Components/card/card.component';
import { UpcommingComponent } from './Components/upcomming/upcomming.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './Components/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    UpcommingComponent,
    TopRatedComponent,
    MovieDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
