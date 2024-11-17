import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos(): any[]{
    return [
      { id:1,nome:'Allan Borges'},
      { id:2,nome:'Rayane Borges'}
    ]
  }

  getAluno(id:number){
    const itens = this.getAlunos().find(item => item.id == id);
    console.log(itens);
    return itens;
  }
}
