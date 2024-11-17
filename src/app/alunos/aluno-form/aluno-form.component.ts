import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: any = {};
  constructor(private service: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any)=>{
        this.id = params['id']

        this.aluno = this.service.getAluno(this.id);

        if(this.aluno == null){
          this.aluno = {}
        }
      }
    )

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


}
