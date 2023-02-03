import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros: Array<any> = [];
  link: string = "https://www.google.com/search?q=";
  constructor(){
    this.libros = [
      {id: '1', titulo: 'La bestia', autor: 'Carmen Mola'},
      {id: '2', titulo: 'La ola', autor: 'Carmen'},
      {id: '3', titulo: 'La puerta', autor: 'Mola'}
    ]
  }
  showAutor(libro: any) {
    alert(libro.autor);
  }
}

