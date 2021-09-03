import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazymodulesComponent } from './lazymodules.component';

const routes: Routes = [
  { path: '', component: LazymodulesComponent }, 
  { path: 'crear', loadChildren: () => import('./crear/crear.module').then(m => m.CrearModule) },
  { path: 'computadoras', loadChildren: () => import('./computadoras/computadoras.module').then(m => m.ComputadorasModule) },
  { path: 'consolas', loadChildren: () => import('./consolas/consolas.module').then(m => m.ConsolasModule) }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazymodulesRoutingModule { }
