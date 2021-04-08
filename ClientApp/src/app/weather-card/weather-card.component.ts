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
  state: object[] = [];
  temp: object[] = [];
  maxTemp: object[] = [];
  minTemp: object[] = [];
  test: object[] = [];

  constructor(public weather: WeatherService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<City[]>(baseUrl + 'api/Cities').subscribe(result => {
      this.Cities = result;
      for (let city of result) {
        this.weather.getWeather(city['name'])
          .pipe(first())
          .subscribe((payload) => {

            city['state'] = payload.weather[0].main;
            city['temp'] = payload.main.temp;
            city['maxTemp'] = Math.ceil(payload.main.temp_max);
            city['minTemp'] = Math.floor(payload.main.temp_min);
            city['test'] = city['name'];

          }, error => console.error(error));
      }
    }, error => console.error(error));

  }
  
}  


interface City {
  Id: number;
  citesWeather: object;
  Name: string;

  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  test: number;
}
