import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/padre/crear/crear.component';
import { PadreComponent } from './pages/padre/padre.component';

const routes: Routes = [

  //ruta componentes
  {path:'padre',pathMatch:'full',component:PadreComponent},
  {path:'crear', component:CrearComponent},

  // rutas de módulos
  { path: 'lazy', loadChildren: () => import('./pages/lazymodules/lazymodules.module').then(m => m.LazymodulesModule) },
  { path: 'cadenas', loadChildren: () => import('./pages/cadenas/cadenas.module').then(m => m.CadenasModule) },
  { path: 'git', loadChildren: () => import('./pages/git/git.module').then(m => m.GitModule) },

  { path: 'ngfor', loadChildren: () => import('./pages/ngfor/ngfor.module').then(m => m.NgforModule) },


  { path: 'validators', loadChildren: () => import('./pages/validators/validators.module').then(m => m.ValidatorsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
