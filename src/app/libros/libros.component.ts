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
      {id:1, titulo: 'hola', autor: 'aksjd'},
      {id:2, titulo: 'asdsadas', autor: 'asdasdsa'},
      {id:3, titulo: 'adios', autor: 'njhgsdf'}
    ]
  }
  showAutor(libro: any) {
    alert(libro.autor);
  }
}

