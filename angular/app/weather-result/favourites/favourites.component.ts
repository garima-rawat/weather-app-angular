import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {


    constructor(private router: Router) {
        console.log("in favorite constructor")
     }
    
    storedValue: any
    hasData:boolean = false
    ngOnInit(): void {
        console.log(" in Favourite Init")
        this.getData()
    }

    
    getData() {
        console.log("In favourite Get Data")
        this.storedValue = JSON.parse(localStorage.getItem("myFavouriteData"));
        console.log(this.storedValue)
        
        if (this.storedValue==null || Object.keys(this.storedValue).length==0){
            this.hasData=false
        }
        else{
            this.hasData=true
        }


    }


    redirect() {
        this.router.navigate(['/results']);
    }

    removeData(column:any) {

        this.storedValue = JSON.parse(localStorage.getItem("myFavouriteData"))
        localStorage.removeItem('myFavouriteData');
        console.log("removed data from favourites")
        var i=0
        for (i; i < Object.keys(this.storedValue).length; i++) {
            if (JSON.stringify(column) === JSON.stringify(this.storedValue[i])) {
                break
            }
        }

        this.storedValue.splice(i, 1);
        localStorage.setItem('myFavouriteData',JSON.stringify(this.storedValue));
        
        this.getData()

    }



}
