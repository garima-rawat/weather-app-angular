import { Component, OnInit, Input } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-details-map',
  templateUrl: './details-map.component.html',
  styleUrls: ['./details-map.component.css']
})
export class DetailsMapComponent implements OnInit {

    @Input() selectedLocation:any
  constructor() { }


  ngOnInit():void{
    let loader = new Loader({
        apiKey:'AIzaSyC8OFO3dO-5IvxA-LDxAWU4N_uYT_b9u2s'
    })

    console.log(this.selectedLocation, "map")

    loader.load().then(()=> {
        const map = new google.maps.Map(document.getElementById("maps"), {
            center: {lat:parseFloat(this.selectedLocation.lat), lng:parseFloat(this.selectedLocation.lng)},
            zoom:12
        })

        const marker = new google.maps.Marker({
            position: {lat:parseFloat(this.selectedLocation.lat), lng:parseFloat(this.selectedLocation.lng)},
            map: map,
          });
    
    })

    
   
}
// let loader = new Loader({
//     apiKey:'AIzaSyC8OFO3dO-5IvxA-LDxAWU4N_uYT_b9u2s',
// })

// loader.load().then(()=> {
//     new google.maps.Map(document.getElementById("mapsss") as HTMLElement, {
//         center: {lat:12, lng:-112},
//         zoom:6
//     })
// func(): void {
//     const b = document.getElementById("map")
//     console.log("in map")
//     console.log(b)

//     let loader = new Loader({
//         apiKey:'AIzaSyC8OFO3dO-5IvxA-LDxAWU4N_uYT_b9u2s'
//     })

//     loader.load().then(() => {
//         new google.maps.Map(document.getElementById("map") as HTMLElement,{
//             center: {lat:12, lng:-112},
//             zoom:6
//           })
//     })
    
    
// }


}
