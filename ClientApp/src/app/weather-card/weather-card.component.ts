import { Component, OnInit, Inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { first, min } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent{
  Cities: City[] = [];
  state: string[] = [];
  temp: number[] = [];
  maxTemp: number[] = [];
  minTemp: number[] = [];
  test: number[] = [];

  constructor(public weather: WeatherService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let state_arr: string[] = [];
    let temp_arr: number[] = [];
    let maxTemp_arr: number[] = [];
    let minTemp_arr: number[] = [];
    let test_arr: number[] = [];

    http.get<City[]>(baseUrl + 'api/Cities').subscribe(result => {
      this.Cities = result;
      for (let i = 0; i < result.length; i++) {
        this.weather.getWeather(result[i]['name'])
          .pipe(first())
          .subscribe((payload) => {
            state_arr.push(payload.weather[0].main);
            temp_arr.push(payload.main.temp);
            maxTemp_arr.push(Math.ceil(payload.main.temp_max));
            minTemp_arr.push(Math.floor(payload.main.temp_min));
            test_arr.push(i)
          }, error => console.error(error));
      }
    }, error => console.error(error));

    
    this.state = state_arr;
    
    this.temp = temp_arr;
    
    this.maxTemp = maxTemp_arr;
    
    this.minTemp = minTemp_arr;

    this.test = test_arr;
  }
  
}  


interface City {
  Id: Number;
  citesWeather: Object;
  Name: string;
}
