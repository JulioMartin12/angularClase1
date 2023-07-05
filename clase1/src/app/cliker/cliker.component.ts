import { Component } from '@angular/core';

@Component({
  selector: 'app-cliker',
  templateUrl: './cliker.component.html',
  styleUrls: ['./cliker.component.css']
})
export class ClikerComponent {
//Property Binding
  numero : number = 0; 

  //Event Binding
 incrementar(){
  this.numero ++;
 }

 decrementar(){
  this.numero --;
 }
 reset(){
  this.numero = 0;
 }
}
