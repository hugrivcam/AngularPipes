import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Hero, miColor } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
   public toogle:boolean = false; 
   public lbutton1: string = "Encender";
   public ordenarPor: keyof Hero | '' = "";
   public ordenActual: 'A'|'D' = 'A';
   public toogleOnOff(){
     this.toogle = !this.toogle;
     if (this.toogle) this.lbutton1 = "Apagar"
     else this.lbutton1 = "Encender";
   }

  public orderBy(key: keyof Hero):void{
    this.ordenarPor = key;
    this.ordenActual = (this.ordenActual==='A') ? this.ordenActual ='D' : this.ordenActual ='A'
  }

   public heroes: Hero[] = [
      {
        name: 'Superman',
        canFly: true,
        color: miColor.blue
      },
      {
        name: 'Batman',
        canFly: false,
        color: miColor.black
      },
      {
        name: 'Daredevil',
        canFly: false,
        color: miColor.red
      },
      {
        name: 'Robin',
        canFly: false,
        color: miColor.red
      },
      {
        name: 'Linterna Verde',
        canFly: true,
        color: miColor.green
      },
      {
        name: 'Spiderman',
        canFly: false,
        color: miColor.blue
      },      
      {
        name: 'Wonder Worman',
        canFly: true,
        color: miColor.red
      }
   ]

  //  public items:MenuItem[] = [
  //   {
  //       label: 'Update',
  //       icon: 'pi pi-refresh'
  //   },
  //   {
  //       label: 'Delete',
  //       icon: 'pi pi-times'
  //   },
  //   {
  //       label: 'Angular',
  //       icon: 'pi pi-external-link',
  //       url: 'http://angular.io'
  //   },
  //   {
  //       label: 'Router',
  //       icon: 'pi pi-upload',
  //       routerLink: '/fileupload'
  //   }
  // ];   
}
