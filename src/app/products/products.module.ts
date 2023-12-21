import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
//import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './pages/order/order.component';//hay algunos componentes de formularios que lo requieren, aunque en esta aplicación no
import { ToogleCasePipe } from './pipes/toogle.case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

//import { SplitButtonModule } from 'primeng/splitbutton';

//import { FieldsetModule } from 'primeng/fieldset'; ya está en prime-ng.module

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    //pipes
    ToogleCasePipe,
    CanFlyPipe,
    SortByPipe //mi custom pipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule,
    //SplitButtonModule
  ]
})
export class ProductsModule { }
