import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../../places';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(places: IPlace[]): string[] {
    const types: string[] = [];
    places.forEach((item) => {
      if (item.type && !types.includes(item.type)) {
        types.push(item.type);
      }
    });
    return types;
  }

}
