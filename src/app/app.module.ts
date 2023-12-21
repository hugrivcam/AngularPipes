import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalendarModule } from 'primeng/calendar';//acordarse de meterlo en los imports, requiere importarlos modulos de form
//import { ButtonModule } from 'primeng/button';

//import { FormsModule,ReactiveFormsModule} from '@angular/forms';//hay algunos componentes de formularios que lo requieren, aunque en esta aplicación no
//import { FormsModule} from '@angular/forms';//hay algunos componentes de formularios que lo requieren, aunque en esta aplicación no
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { SharedModule } from './shared/shared.module';
//import { SharedModule } from 'primeng/api';
//import { NoopAnimationModule } from '@angular/animations';

//para que funcione la traduccion de idioma en el date pipe hay que importar el idioma, "tiene narices"

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
//registerLocaleData(localeES);
//hasta aqui el fin para que funcione el datepipe

//para que funcione la traduccion de idioma en el componentes de calendario  hay que importar


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }


//ButtonModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,