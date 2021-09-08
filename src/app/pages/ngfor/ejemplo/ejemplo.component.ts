import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  peliculas:string [] = ["Star Wars", "Avengers", "S.W.A.T.", "Rápidos y furiosos"]

  coches: Array<any> = [
    {tipo:'Deportivo', marca:'Ford', cantidad:5},
    {tipo:'Super deportivo', marca:'Ferrari', cantidad:3},
    {tipo:'Lujo', marca:'Bentley', cantidad:8}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
