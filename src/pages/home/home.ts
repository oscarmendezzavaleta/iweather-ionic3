import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
weather:any;
location:{
  city:string,
  state:string
}
  constructor(public navCtrl: NavController,private WeatherProvider:WeatherProvider) {

  }

  ionViewWillEnter(){
   this.location={
     city:'Miami',
     state:'FL'
   }
this.WeatherProvider.getWeather(this.location.city,this.location.state)
.subscribe(weather=>{
  this.weather=weather.current_observation;
//console.log(weather.current_observation);
})

  }
}
