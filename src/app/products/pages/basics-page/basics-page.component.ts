import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
    public nameLower:string = "hugo rivas";
    public nameUpper:string = "HUGO NO ES MANDALORIANO";
    public fullName: string = "HuGo No eS mandaLORIANO";

    public miFecha:Date = new Date();
}
