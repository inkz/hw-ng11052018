import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../places';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input()
  public item: IPlace;

}
