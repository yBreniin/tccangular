import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  value = 'Pesquisar';
  api = ['nomeproduto', 'produtopreco'];
  constructor(
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {}

  // exibirProduto() {
  //   const id = Number(this.activatedRoute.snapshot.paramMap.get('idProdutos'));
  //   this.homeService.listarProdutoId(1).subscribe(retorno => {
  //     this.produtos = retorno;
  //   })
  // }
}
