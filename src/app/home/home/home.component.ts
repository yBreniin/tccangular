import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  value = 'Pesquisar';

  produtos: Observable<Produtos[]>;
  api = ['nomeproduto', 'produtopreco'];
  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
    )
    {
    this.produtos = this.homeService.list();
  }

  ngOnInit(): void {}

  // exibirProduto() {
  //   const id = Number(this.activatedRoute.snapshot.paramMap.get('idProdutos'));
  //   this.homeService.listarProdutoId(1).subscribe(retorno => {
  //     this.produtos = retorno;
  //   })
  // }
}
