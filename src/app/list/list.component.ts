import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IPlace } from '../places';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public list: IPlace[];

  @Output()
  public choose: EventEmitter<IPlace> = new EventEmitter();

  @Output()
  public chooseType: EventEmitter<string> = new EventEmitter();

  public currentType: string;

  public onClick(item: IPlace): void {
    this.choose.emit(item);
  }

  public onTypeClick(type: string): void {
    this.currentType = type;
  }

}
