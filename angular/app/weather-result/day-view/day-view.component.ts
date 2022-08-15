import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {


    @Input() dailyData: any;

    constructor() {
        console.log("Day View : Contructor")
        console.log("day view", this.dailyData)
        console.log('in Day View Component func', this.weatherCodeString)
    }

    ngOnInit(): void {
        console.log("Day View : Init")
        console.log("day view", this.dailyData)
        console.log(this.weatherCodeString)
    }


    weatherCodeString = {
        "0": "Unknown",
        "1000": ["Clear", "clear_day.svg"],
        "1001": ["Cloudy", "cloudy.svg"],
        "1100": ["Mostly Clear", "mostly_clear_day.svg"],
        "1101": ["Partly Cloudy", "partly_cloudy_day.svg"],
        "1102": ["Mostly Cloudy", "mostly_cloudy.svg"],
        "2000": ["Fog", "fog.svg"],
        "2100": ["Light Fog", "fog_light.svg"],
        "3000": ["Light Wind", "light_wind.jpg"],
        "3001": ["Wind", "wind.jpg"],
        "3002": ["Strong Wind", "strong-wind.png"],
        "4000": ["Drizzle", "drizzle.svg"],
        "4001": ["Rain", "rain.svg"],
        "4200": ["Light Rain", "rain_light.svg"],
        "4201": ["Heavy Rain", "rain_heavy.svg"],
        "5000": ["Snow", "snow.svg"],
        "5001": ["Flurries", "flurries.svg"],
        "5100": ["Light Snow", "snow_light.svg"],
        "5101": ["Heavy Snow", "snow_heavy.svg"],
        "6000": ["Freezing Drizzle", "freezing_drizzle.svg"],
        "6001": ["Freezing Rain", "freezing_rain.svg"],
        "6200": ["Light Freezing Rain", "freezing_rain_light.svg"],
        "6201": ["Heavy Freezing Rain", "freezing_rain_heavy.svg"],
        "7000": ["Ice Pellets", "ice_pellets.svg"],
        "7101": ["Heavy Ice Pellets", "ice_pellets_heavy.svg"],
        "7102": ["Light Ice Pellets", "ice_pellets_light.svg"],
    };



}
