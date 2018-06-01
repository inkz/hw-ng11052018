import { Component, Input } from '@angular/core';
import { IPlace } from '../places';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  public place: IPlace;

}
