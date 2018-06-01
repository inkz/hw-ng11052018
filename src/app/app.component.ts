import { Component } from '@angular/core';
import { IPlace, places$ } from './places';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public places: Observable<IPlace[]> = places$;

  public currentPlace: IPlace;

  public currentType: string;

  public chooseItem(place: IPlace): void {
    this.currentPlace = place;
  }

  public chooseType(type: string): void {
    this.currentType = type;
  }

}
