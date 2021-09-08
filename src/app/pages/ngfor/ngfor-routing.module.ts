import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './ngfor.component';

const routes: Routes = [{ path: '', component: NgforComponent }, { path: 'crear', loadChildren: () => import('./crear/crear.module').then(m => m.CrearModule) }, { path: 'ejemplo', loadChildren: () => import('./ejemplo/ejemplo.module').then(m => m.EjemploModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgforRoutingModule { }
