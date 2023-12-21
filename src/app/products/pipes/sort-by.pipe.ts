import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

//keyof(Hero) generará un tipo que es la unión de todas esas claves, es decir, 'name' | 'power' | 'age' | 'color' ...
//en una plantilla de angular
//<div *ngFor="let hero of heroes | sortBy:'name'">{{ hero.name }}</div>
export class SortByPipe implements PipeTransform {

  transform(value: Hero[], arg?: keyof(Hero) | null | '', orden: 'A' | 'D' = 'A'): Hero[] {
    let v1:number = 1; 
    let v2:number = -1;
    //v1 = 1;v2 = -1;
    if (orden === 'D') v1 = -1;v2 = -1;
    switch(arg){
      case 'name':
        return value.sort((a,b) => a.name > b.name ? v1 : v2); // si el prime elemento es > que el segundo devolvemos un numero positivo si no negativo, si son iguales sería un cero, pero eso nos da igual
      case 'canFly':
        return value.sort((a,b) => a.canFly  > b.canFly ? v1 : v2);
      case 'color':
        return value.sort((a,b) => a.color > b.color ? v1 : v2);
    }
    return value;
  }

}
