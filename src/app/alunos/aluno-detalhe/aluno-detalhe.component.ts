import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: any;
  constructor(private service: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any)=>{
        this.id = params['id']

        this.aluno = this.service.getAluno(this.id);
      }
    )


    if(this.aluno == null){
      console.log('aluno não encontrado')
    }

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
