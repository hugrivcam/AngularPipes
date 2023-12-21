import { ElementSchemaRegistry } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'toogleCase' //este pipe deberá transforma de mayusculas a minusculas y viceversa
})
export class ToogleCasePipe implements PipeTransform {
    //...args: any[]) {

    transform(value: string, mayus:boolean = false):string {
        console.log (mayus)
        if (mayus === true) return value.toUpperCase();         //throw new Error("Method not implemented.");
        else return value.toLowerCase();         //throw new Error("Method not implemented.");
    }

    // transform(value: string,...args:any[]):string {
    //     console.log (args[0]);
    //     if (args[0] === true)
    //         return value.toUpperCase();         //throw new Error("Method not implemented.");
    //     else
    //         return value.toLowerCase();         //throw new Error("Method not implemented.");
    // }
}