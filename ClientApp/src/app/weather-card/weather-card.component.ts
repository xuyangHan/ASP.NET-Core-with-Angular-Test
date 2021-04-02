import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent{
  citesWeather: Object;
  darkMode: boolean;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  errorMessage: string;
  cityName;
  cityAdded = false;  

  constructor(public weather: WeatherService) {

    this.cityName = 'Paris';
    this.weather.getWeather('Paris')
      .pipe(first())
      .subscribe((payload) => {
        this.state = payload.weather[0].main;
        this.temp = Math.ceil(payload.main.temp);
      }, (err) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      });
  }

}
