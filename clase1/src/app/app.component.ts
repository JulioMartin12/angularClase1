import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera Clase';
  valorInicial : number = -1;
  paises : string [] = ['Argentina', 'Francia', 'Brazil', 'Uruguay', 'España']

  clickerWasClicked(){
    console.log('Cliker was clicked');
  }

  deleteCountry(paisBorrar: string){
    this.paises = this.paises.filter(pais => pais !== paisBorrar)

  }
}
