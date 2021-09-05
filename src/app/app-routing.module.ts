import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  { path: 'lazy', loadChildren: () => import('./pages/lazymodules/lazymodules.module').then(m => m.LazymodulesModule) },
  { path: 'cadenas', loadChildren: () => import('./pages/cadenas/cadenas.module').then(m => m.CadenasModule) },
  { path: 'git', loadChildren: () => import('./pages/git/git.module').then(m => m.GitModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
