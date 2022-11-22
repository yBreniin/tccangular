import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../../core/model';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.scss'],
})
export class LookbookComponent implements OnInit {
  value = 'Pesquisar';

  public productList: any;
  public totalItem: number = 0;
  constructor(
    private api: ApiService,
    private cartService: CarrinhoapiService
  ) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((retorno) => {
      this.productList = retorno;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.produtopreco });
      });
    });

    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
