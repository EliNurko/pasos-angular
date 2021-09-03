import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArreglosRoutingModule } from './arreglos-routing.module';
import { ArreglosComponent } from './arreglos.component';


@NgModule({
  declarations: [
    ArreglosComponent
  ],
  imports: [
    CommonModule,
    ArreglosRoutingModule
  ]
})
export class ArreglosModule { }
