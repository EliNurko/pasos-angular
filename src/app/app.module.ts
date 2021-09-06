import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    //se importa el components module y el pages module en el app.module para poder utilizarlos
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
