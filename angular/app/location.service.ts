import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

    myMethod$:Observable<any>;
    
    private myMethodSubject=new BehaviorSubject<any>("");


  constructor(private http: HttpClient) {
      this.myMethod$=this.myMethodSubject.asObservable();
   }

  getIpinfo(){
      let url = 'https://ipinfo.io/json?token=addKeyHere'
      return this.http.get(url);
      
  }

  getAutoComplete(searchKey:string){
    let url = '/autoComplete/'+searchKey
    console.log("returning from autoComplete service")
    return this.http.get(url)

}

  getGeolocation(addr:string){
      let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+addr+'&key=addKeyHere'
      console.log("returning from geolocation service")
      return this.http.get(url)

  }

  getTomorrowIO(lat:any, lng:any){
      let url = '/card/'+lat+'/'+lng
      return this.http.get(url)

    
  }

  myMethod(resultData:any){
      console.log("returning from service myMethod ", resultData)
      this.myMethodSubject.next(resultData);

  }


}
