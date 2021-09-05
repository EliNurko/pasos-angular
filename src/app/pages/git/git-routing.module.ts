import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git.component';

const routes: Routes = [{ path: '', component: GitComponent }, { path: 'pasos', loadChildren: () => import('./pasos/pasos.module').then(m => m.PasosModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitRoutingModule { }
