import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path:'cursos', loadChildren: ()=> import('./cursos/cursos.module').then(m=> m.CursosModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {path:'alunos', loadChildren: ()=> import('./alunos/alunos.module').then(m=> m.AlunosModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {path:'login', component:LoginComponent},

  {path:'', component:HomeComponent, canActivate:[AuthGuard]},

  {path:'**', component:PaginaNaoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
