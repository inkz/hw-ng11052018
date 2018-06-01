import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IPlace } from '../places';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input()
  public list: IPlace[];

  @Output()
  public choose: EventEmitter<IPlace> = new EventEmitter();

  @Output()
  public chooseType: EventEmitter<string> = new EventEmitter();

  public types: string[] = ['Hotel', 'Fishing', 'Tours', 'Weather'];

  public onClick(item: IPlace): void {
    this.choose.emit(item);
  }

  public onTypeClick(type: string): void {
    console.log(type);
    this.chooseType.emit(type);
  }

}
