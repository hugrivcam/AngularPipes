import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
//import { OrderComponent } from 'src/app/products/pages/order/order.component';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] | undefined;
  alertar(texto:string):void{
    alert(texto);
  }

  ngOnInit() {
      this.menuItems = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',  
          items:[
            {
              label: 'Texto y Fechas',
              icon: 'pi pi-align-left',
              routerLink: 'products'
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: 'products/numbers'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'products/uncommon'
            },      
          ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items:[
          {
            label: 'Pipe personalizado 1',
            icon: 'pi pi-cog',
            routerLink : 'products/custom'
          },
        ]     
      },
      {
          label: 'about',
          icon: 'pi pi-fw pi-apple',
          disabled: true
      }
      ];
  }
}
