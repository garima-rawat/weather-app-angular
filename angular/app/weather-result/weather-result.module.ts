import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultHeaderComponent } from './result-header/result-header.component';
import { DayViewComponent } from './day-view/day-view.component';
import { DailyTempChartComponent } from './daily-temp-chart/daily-temp-chart.component';
import { MeteogramComponent } from './meteogram/meteogram.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsMapComponent } from './details/details-map/details-map.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Routes, RouterModule}  from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ResultHeaderComponent,
    DayViewComponent,
    DailyTempChartComponent,
    MeteogramComponent,
    DetailsComponent,
    NavbarComponent,
    DetailsMapComponent,
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HighchartsChartModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
      ResultHeaderComponent,
      FavouritesComponent,
      NavbarComponent
      
  ]
})
export class WeatherResultModule { }
