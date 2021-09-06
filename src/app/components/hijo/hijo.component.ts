import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  //codigo para implementar el imput
  @Input() consolaHijo ='Sin nombre';
  // código con el que se mostrará el output de tipo string en el html
  @Output() cambionombrehijo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  //variable para cambiar de nuevo un nombre en el hijo
  cambiarnuevo(){
    //codigo para cambiar otro nombre
    this.consolaHijo = 'Play Station';
    //código para mostrar la variable en otro texto
    this.cambionombrehijo.emit(this.consolaHijo);
  }

}
