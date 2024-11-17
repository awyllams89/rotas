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
import { AuthGuardService } from './guards/auth-guard.service';


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
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
