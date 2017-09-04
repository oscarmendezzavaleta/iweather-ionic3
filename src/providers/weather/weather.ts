import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
apikey='72ad53b1ca7fb9ae';
url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getWeather(city,state){
    return this.http.get(this.url+'/'+ state +'/'+ city+'.json')
    .map(res=>res.json());
  }

}

//https://www.wunderground.com
//https://www.ion-book.com/blog/tips/aot-ahead-of-time/