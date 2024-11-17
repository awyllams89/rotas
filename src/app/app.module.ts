import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
