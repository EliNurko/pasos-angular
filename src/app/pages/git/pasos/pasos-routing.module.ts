import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasosComponent } from './pasos.component';

const routes: Routes = [{ path: '', component: PasosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasosRoutingModule { }
