import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arreglos',
  templateUrl: './arreglos.component.html',
  styleUrls: ['./arreglos.component.css']
})
export class ArreglosComponent implements OnInit {

  arreglostring=['Windows','MacOS','Linux']
  conteo = [0, 1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
