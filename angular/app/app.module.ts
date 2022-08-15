import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherResultModule } from './weather-result/weather-result.module';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import {MatInputModule} from '@angular/material/input';
import {MatFormField} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'; 

const material=[
    MatAutocompleteModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    WeatherResultModule ,
    HttpClientModule  ,
    RouterModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
