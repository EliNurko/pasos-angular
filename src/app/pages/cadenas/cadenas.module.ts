import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadenasRoutingModule } from './cadenas-routing.module';
import { CadenasComponent } from './cadenas.component';


@NgModule({
  declarations: [
    CadenasComponent
  ],
  imports: [
    CommonModule,
    CadenasRoutingModule
  ]
})
export class CadenasModule { }
