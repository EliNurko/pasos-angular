import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { ValidatorsComponent } from './validators.component';


@NgModule({
  declarations: [
    ValidatorsComponent
  ],
  imports: [
    CommonModule,
    ValidatorsRoutingModule
  ]
})
export class ValidatorsModule { }
