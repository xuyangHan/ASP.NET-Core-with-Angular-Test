import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  currentTemp;

  constructor(public weather: WeatherService) {
    this.currentTemp = weather.getCurrentTemp('Paris');

  }

  ngOnInit() {
  }

}
