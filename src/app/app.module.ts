import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
