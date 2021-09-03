import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  cadenastring: string = "Esta es una cadena de tipo string ubicada en string.component.ts"
  cadenanumerica:number = 1
  cadenaalfanumerica: string | number ="cadena alfanumérica 1,2,3"
  constructor() { }

  ngOnInit(): void {
    this.cadenaalfanumerica=5
  }

}
