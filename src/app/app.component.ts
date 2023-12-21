import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fecha:Date | undefined;
  title = 'pipesApp';
  constructor(private primeConfig: PrimeNGConfig){
    //this.fecha = new Date();
  } //esta injeccion del servicio me permite usar animaciones propias de angular primeng
  
  ngOnInit(){
    this.primeConfig.ripple = true; //activadas las animaciones
  }

  dialgo(){
    alert("Hola");
  }

}
