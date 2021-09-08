import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  peliculas:string [] = ["Star Wars", "Avengers", "S.W.A.T.", "Rápidos y furiosos"]

  constructor() { }

  ngOnInit(): void {
  }

}
