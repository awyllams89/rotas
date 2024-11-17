import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: Number;
  inscricao: Subscription;
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
   }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any)=> {
        this.id = params['id']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
