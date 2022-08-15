import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { LocationService } from '../../location.service';


import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css',],
    animations: [
        // animation triggers go here
        trigger('slideLeft', [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.3s')
            ]),
            transition(':leave', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.3s')
            ])

        ]),
        trigger('slideRight', [
            transition(':leave', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.3s')
            ])

        ])
    ],

})

export class NavbarComponent implements OnInit {



    onAnimationDone(event: AnimationEvent) {
        this.handleDetails()
    }

    resultData: any;

    constructor(private locationData: LocationService) {
        console.log("Navbar Constructor", this.resultData)
    }

    starChecked = false

    detailButton = true;

    detailShow = false

    active = 1;
    dailyData: any
    currentDetailData: any
    Points: any

    hasData = false
    showError = false
    animateYes = false

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


    ngOnInit(): void {

        this.animateYes = false
        this.starChecked = false


        this.locationData.myMethod$.subscribe((resultData) => {
            this.resultData = resultData
            this.starChecked = false
            
            console.log('in Navbar Init', typeof (this.resultData), this.resultData, this.hasData, this.starChecked)

            if (this.resultData == {} || this.resultData == null || this.resultData == undefined || this.resultData == "") {
                this.hasData = false
                this.showError = false
            }
            else if (this.resultData.hourly.hasOwnProperty('code')) {
                console.log("In navbar Limit reached")
                this.showError = true
                this.hasData = false

            }
            else {

                this.showError = false

                this.hasData = true

                this.dailyData = this.resultData.daily.data.timelines[0].intervals

                this.Points = this.resultData.location

                this.detailButton = true;

                this.detailShow = false

                var dataStored = JSON.parse(localStorage.getItem("myFavouriteData"));

                if (dataStored == undefined || dataStored == null) {
                    localStorage.setItem("myFavouriteData", JSON.stringify([]))
                }
                else {
                    for (let i = 0; i < Object.keys(dataStored).length; i++) {
                        if (JSON.stringify(this.Points) === JSON.stringify(dataStored[i])) {
                            console.log("this point is already stored, star checked",this.Points)
                            this.starChecked = true
                        }
                    }
                }
            }
        })



    }


    handleDetailButton() {
        return this.detailButton
    }

    handleDetails() {
        //this.shouldAnimate()
        this.detailShow = !this.detailShow
        console.log("in handle details", this.detailShow)


    }

    // shouldAnimate(){
    //     if (this.detailShow==true){
    //         this.animateYes=true
    //     }
    //     else {
    //         this.animateYes=false
    //     }
    // }



    updateDetails(index: any) {
        this.detailShow = true
        this.detailButton = false
        console.log("in update Deatils", index, this.dailyData[index])
        var currentLocation = this.resultData.location
        var currentData = this.dailyData[index].values
        this.currentDetailData = { "currentData": currentData, "currentLocation": currentLocation }
        console.log("in update Deatils", this.currentDetailData)

    }



    saveData() {

        if (this.starChecked == true) {

            this.starChecked = false

            var dataStored = JSON.parse(localStorage.getItem("myFavouriteData"))
            var column = this.resultData.location

            localStorage.removeItem('myFavouriteData');
            console.log("removed data from favourites")
            var i = 0
            for (i; i < Object.keys(dataStored).length; i++) {
                if (JSON.stringify(column) === JSON.stringify(dataStored[i])) {
                    break
                }
            }

            dataStored.splice(i, 1);
            localStorage.setItem('myFavouriteData', JSON.stringify(dataStored));
        }



        else {
            this.starChecked = true
            var dataStored = JSON.parse(localStorage.getItem("myFavouriteData"));
            if (dataStored == null || dataStored == undefined) {
                console.log("No data yet")
                localStorage.setItem("myFavouriteData", JSON.stringify([this.Points]))
            }

            else {
                console.log("In favourite Save Data, some data already exisits")
                var flag = true
                for (let i = 0; i < Object.keys(dataStored).length; i++) {
                    if (JSON.stringify(this.Points) === JSON.stringify(dataStored[i])) {
                        flag = false
                    }
                }

                if (flag == true) {

                    dataStored.push(this.Points)
                    localStorage.setItem("myFavouriteData", JSON.stringify(dataStored));
                }

            }
        }

    }





}
