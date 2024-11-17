import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {path:'cursos', loadChildren: ()=> import('./cursos/cursos.module').then(m=> m.CursosModule),
    canActivate:[AuthGuardService]
  },
  {path:'alunos', loadChildren: ()=> import('./alunos/alunos.module').then(m=> m.AlunosModule),
    canActivate:[AuthGuardService]
  },

  {path:'', component:HomeComponent, canActivate:[AuthGuardService]},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
