import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../../core/model';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.scss']
})
export class LookbookComponent implements OnInit {
  produtos: Produtos[] = [];

  value = 'Pesquisar';
  constructor(private api:ApiService) {
   }

  ngOnInit(): void {
    this.listarProdutos();


    // this.api.getProduct().subscribe(res=>{
    //   this.productList=res;
    // })
  }

  listarProdutos() {
    this.api.listarProdutos().subscribe(retorno => {
      this.produtos = retorno;
    })
  }
}
