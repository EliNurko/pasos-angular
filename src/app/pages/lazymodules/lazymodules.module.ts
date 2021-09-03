import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymodulesRoutingModule } from './lazymodules-routing.module';
import { LazymodulesComponent } from './lazymodules.component';


@NgModule({
  declarations: [
    LazymodulesComponent
  ],
  imports: [
    CommonModule,
    LazymodulesRoutingModule
  ]
})
export class LazymodulesModule { }
