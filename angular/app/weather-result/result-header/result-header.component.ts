import { Component, OnInit, Input, } from '@angular/core';



@Component({
    selector: 'app-result-header',
    templateUrl: './result-header.component.html',
    styleUrls: ['./result-header.component.css']
})
export class ResultHeaderComponent implements OnInit {


    @Input() resultData: any;

    haveData = false
    fav = false


    constructor() {
    }



    ngOnInit(): void {


        console.log('I am result header and showing whether module received data', this.resultData)
        if (this.resultData != undefined || this.resultData != null) {
            this.haveData = true

        }


    }

    // inFav() {
    //     this.fav = true
    //     console.log("fav", this.fav)
    // }

    // inRes() {
    //     this.fav = false
    //     console.log("res", this.fav)
    // }

    // ifNav() {
    //     if (this.fav == false && this.haveData == true) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }

    // }

    // temp = JSON.stringify(this.weatherData)
    // b = JSON.parse(this.temp)

}
