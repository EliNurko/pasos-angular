import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringComponent } from './string.component';

const routes: Routes = [{ path: '', component: StringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringRoutingModule { }
