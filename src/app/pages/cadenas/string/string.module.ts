import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringRoutingModule } from './string-routing.module';
import { StringComponent } from './string.component';


@NgModule({
  declarations: [
    StringComponent
  ],
  imports: [
    CommonModule,
    StringRoutingModule
  ]
})
export class StringModule { }
