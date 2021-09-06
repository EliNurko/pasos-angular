import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  consola:string ='Ver consola';

  constructor() { }

  ngOnInit(): void {
  }
  Cambiarconsola(){
    this.consola = 'Xbox';
  }
}
