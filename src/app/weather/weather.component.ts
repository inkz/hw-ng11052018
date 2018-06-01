import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../places';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input()
  public place: IPlace;

}
