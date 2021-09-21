import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemploRoutingModule } from './ejemplo-routing.module';
import { EjemploComponent } from './ejemplo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EjemploComponent
  ],
  imports: [
    CommonModule,
    EjemploRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EjemploModule { }
