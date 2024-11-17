import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'cursos', component:CursosComponent},
  {path:'curso/:id', component:CursoDetalheComponent},
  {path:'curso-nao-encontrado', component:CursoNaoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
