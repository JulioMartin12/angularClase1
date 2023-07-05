import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cliker',
  templateUrl: './cliker.component.html',
  styleUrls: ['./cliker.component.css']
})
export class ClikerComponent {
//Property Binding
@Input()
  numero : number = 0; 

@Output()
  clickEmitter = new EventEmitter();
  //Event Binding
 incrementar(){
  this.numero ++;
  this.clickEmitter.emit();
 }

 decrementar(){
  this.numero --;
  this.clickEmitter.emit();
 }
 reset(){
  this.numero = 0;
 }
}
