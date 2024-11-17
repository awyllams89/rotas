import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth-guard';
import { AlunosGuard } from './guards/alunos-guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [AuthService, AuthGuard, AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
