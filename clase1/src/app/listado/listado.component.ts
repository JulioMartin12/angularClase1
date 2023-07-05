import { Component } from '@angular/core';

type Producto = {
  nombre : string,
  precio : number
}


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  paises : string[] = ['Argentina', 'Francia', 'Brasil','Colombia'];
  
  productos : Producto [] = [
    {nombre:"Nokia",
     precio:100},
     {nombre:"Motorola",
     precio:500},
     {nombre:"Huawei",
     precio:300},
     {nombre:"Samsung",
     precio:200},
  ] 

}
