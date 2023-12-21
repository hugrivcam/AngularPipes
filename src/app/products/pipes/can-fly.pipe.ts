import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : 'No vuela';
    // if (value === true) return "Vuela";
    // return "No vuela";
  }
}






