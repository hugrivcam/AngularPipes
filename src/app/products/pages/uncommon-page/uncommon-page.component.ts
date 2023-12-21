//import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
    //public totalSells: number = 0;
      public miHora: Date = new Date();
    // pipe  i18n Select -----------------------------------------------
      public name: string = "Fernando"
      public gender: 'male' | 'female' = 'male';
      public invitationMap = {
        'male': 'invitarlo',
        'female': 'invitarla'
      }

      changeClient ():void{
        if(this.name === 'Fernando')
        {
          this.name = 'Melissa';
          this.gender = 'female';
        }
        else{
          this.name = 'Fernando';
          this.gender = 'male';
        }
      }
      
      // pipe  i18n Plural ----------------------------------------------
      public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
      public clientsMap=
      {
        '=0': 'no tenemos ningún cliente',
        '=1': 'tenemos un cliente',
        'other': 'tenemos # clientes'
      }
      deleteClient():void{
        this.clients.shift();
        console.log(this.clients.length);
      }
      // KeyValue pipe --------------------------------------------------
      public person = {
        name:'Huguito',
        age: 36,
        address: 'la dirección de mi casa'
      }

      //Async Pipe ------------------------------------------------------

      //observable timer 
      //si lanzamos el subscribe funciona, pero habría que hace unsubscribe
      //public myObservableTimer: Observable<number> = interval(1000)
      public myObservableTimer = interval(1000)
      .pipe(
        tap(valor => {
          console.log('tap:',valor);
          this.miHora = new Date();
          //console.log(this.miHora.toLocaleTimeString());
        })

      )
      //.subscribe(); si no hacemos un unsubscribe entonces   

      public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve('Tenemos la promesa.');
          //console.log("tenemos la promesa si o si");
        },3500);
      })
}

