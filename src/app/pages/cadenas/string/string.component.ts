import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  cadenastring="Esta es una cadena de tipo string ubicada en string.component.ts"
  cadenanumerica=1
  constructor() { }

  ngOnInit(): void {
  }

}
