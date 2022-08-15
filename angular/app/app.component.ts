import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

export class InputDetail {
    public city: string = "";
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    model = new InputDetail();

    title = 'weather-app-angular';
    lat = 0
    lng = 0
    address = ''
    ipinfoData: any
    geolocationData: any
    checkBox = false
    streetDisabled = false
    cityDisabled = false
    stateDisabled = false
    street = ""
    city = ""
    submitted = false
    validData = false
    dataReceived = false
    resultData: any
    weatherData: any
    autoCompleteData: any
    options = ['Los Angeles', 'Las Vegas']
    suggestions:any


    constructor(private locationData: LocationService, private httpClient: HttpClient) {
        console.log('AppComponent constructor')
        this.locationData.getIpinfo().subscribe(data => {
            console.log(data)

            this.ipinfoData = data


        })

        console.log('AppComponent constructor exit')

    }


    autoComplete(locationData: LocationService) {
        console.log("in autocomplete")
        locationData.getAutoComplete("").subscribe(data => {
            console.log(data)
            this.autoCompleteData = data
            console.log(this.autoCompleteData)
        })
    }
    
    getAutoSuggestions(searchKey: any) {
        console.log("in auto suggestions", searchKey);
        this.locationData.getAutoComplete(searchKey).subscribe(suggestions => {
            this.setSuggestions(suggestions)
        }
        )
    }

    setSuggestions(data: any) {
        console.log("in set suggestions", data)
        if (!data) {
            this.suggestions = [];
        }
        this.suggestions = []
        for (let i=0;i<4;i++){
            var entry = data.predictions[i].description.split(',')
            if (entry[2]==' USA'){
            this.suggestions.push(entry[0])
            }
        }
        
    }

    autoDetectFunc() {

        console.log("in autodetect")

        this.streetDisabled = !this.streetDisabled
        this.cityDisabled = !this.cityDisabled
        this.stateDisabled = !this.stateDisabled

        this.checkBox = !this.checkBox

        console.log("in autodetect", this.streetDisabled, this.checkBox)
    }




    tomorrowIo(street: string, city: string, state: string) {
        //calls tomorrow.io
        console.log("in tomorrow.io")


        this.locationData.getTomorrowIO(this.lat, this.lng).subscribe(data => {
            console.log("data tomorrow ", data)
            this.weatherData = data


            if (this.weatherData.hourly.hasOwnProperty('code')) {
                console.log("Tomorrow.io Limit reached")
                this.dataReceived = true
                //this.validData = false

                this.resultData = {
                    "daily": this.weatherData.daily,
                    "hourly": this.weatherData.hourly,
                    "location": {
                        "lat": this.lat,
                        "lng": this.lng,
                        "street": street,
                        "city": city,
                        "state": state
                    }

                }
                this.locationData.myMethod(this.resultData)

            }
            else {

                this.dataReceived = true
                //this.validData = true
                this.resultData = {
                    "daily": this.weatherData.daily,
                    "hourly": this.weatherData.hourly,
                    "location": {
                        "lat": this.lat,
                        "lng": this.lng,
                        "street": street,
                        "city": city,
                        "state": state
                    }

                }

                this.locationData.myMethod(this.resultData)
            }


        })

    }


    ipInfo() {

        this.validData = true
        console.log("I am in ipinfoo")
        console.log(typeof (this.ipinfoData))
        console.log(this.ipinfoData)
        console.log(this.ipinfoData.city)

        var loc = this.ipinfoData.loc.split(",")
        this.lat = loc[0]
        this.lng = loc[1]

        var city = this.ipinfoData.city
        var region = this.ipinfoData.region

        this.address = city + ", " + region

        console.log(this.lat, this.lng, this.address)

        this.tomorrowIo('', city, region)
    }


    geoLocation(addr: any, locationData2: LocationService) {
        console.log("in geoLocation")

        var address = addr.street + "+" + addr.city + "+" + addr.state + ""
        console.log(address)

        locationData2.getGeolocation(address).subscribe(data => {
            console.log(data)
            this.geolocationData = data

            console.log(this.geolocationData)

            if (this.geolocationData.status != 'OK') {
                console.log("no data for this")
                this.dataReceived = true
                this.validData = false
            }
            else {
                this.validData = true
                var loc = this.geolocationData.results[0].geometry.location
                this.lat = loc.lat
                this.lng = loc.lng
                this.address = this.geolocationData.results[0].formatted_address

                console.log(this.lat, this.lng, this.address)
                this.tomorrowIo(addr.street, addr.city, addr.state)
            }
        })

    }


    





    onSubmit(data: any) {
        console.log("in on submit")
        this.resultData = null
        this.submitted = true
        console.log(data)
        if (this.checkBox == true) {
            this.ipInfo()
        }
        else {
            this.geoLocation(data, this.locationData)

        }

    }

    reset(inputForm:NgForm) {

        inputForm.reset();

        this.submitted = false
        this.validData = false
        this.dataReceived = false
        this.checkBox = false
        this.streetDisabled = false
        this.cityDisabled = false
        this.stateDisabled = false
        this.resultData = ''
        console.log("in reset", this.resultData, this.submitted)
        this.locationData.myMethod(this.resultData)
    }







    getSubmitted() {
        //console.log("in", this.submitted, this.weatherData)
        if ((this.submitted == true && (this.resultData == null || this.resultData == {} || this.resultData == undefined)) || this.submitted == false) {
            //console.log("submitted false")
            return false
        }
        else {
            //console.log("submitted true")
            return true
        }
    }

    getProgress() {
        if (this.submitted == true && this.dataReceived == false) {
            console.log("Came here --------------------")
            return true
        }
        else {
            return false
        }
    }

    getError() {
        //console.log("in get error", this.submitted, this.dataReceived, this.validData)
        if (this.submitted == true && this.dataReceived == true && this.validData == false) {
            return true
        }
        else {
            return false
        }

    }

    // getResults() {

    //     if (this.submitted == true && this.validData == true) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }

    // }

    
}

