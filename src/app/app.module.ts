import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesModule } from './pages/pages.module';
import { ValidatorsModule } from './pages/validators/validators.module';

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
    PagesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
