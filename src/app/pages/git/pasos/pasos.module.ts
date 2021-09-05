import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasosRoutingModule } from './pasos-routing.module';
import { PasosComponent } from './pasos.component';


@NgModule({
  declarations: [
    PasosComponent
  ],
  imports: [
    CommonModule,
    PasosRoutingModule
  ]
})
export class PasosModule { }
