import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadenasComponent } from './cadenas.component';

const routes: Routes = [{ path: '', component: CadenasComponent }, { path: 'crear', loadChildren: () => import('./crear/crear.module').then(m => m.CrearModule) }, { path: 'string', loadChildren: () => import('./string/string.module').then(m => m.StringModule) }, { path: 'arreglos', loadChildren: () => import('./arreglos/arreglos.module').then(m => m.ArreglosModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadenasRoutingModule { }
