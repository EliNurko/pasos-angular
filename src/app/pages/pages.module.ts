import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PadreComponent } from './padre/padre.component';

@NgModule({
  declarations: [
    //se declara el componente a llamar
    PadreComponent
  ],
  imports: [
    //se importa el components module para poder utilizar a sus componentes
    CommonModule,
    ComponentsModule
  ]
})

export class PagesModule { }