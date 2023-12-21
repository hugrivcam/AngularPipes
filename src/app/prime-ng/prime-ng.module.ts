//aqui iré importando todos los modulos de prime que yo vaya necesitando
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
//MenuModule
@NgModule({
  declarations: [],
  imports: [
    CommonModule//podriamos eliminar porque aunque no lo explica en este modulo especial no lo necesitamos, yo en caso de duda lo dejo
  ],
  exports:[
    FieldsetModule,
    CardModule,
    PanelModule,
    MenubarModule,
    ButtonModule,
    CalendarModule,
    ToolbarModule,TableModule
  ]
})
export class PrimeNgModule { }
