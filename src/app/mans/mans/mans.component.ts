import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';

@Component({
  selector: 'app-mans',
  templateUrl: './mans.component.html',
  styleUrls: ['./mans.component.scss'],
})
export class MansComponent implements OnInit {
  value = 'Pesquisar';

  public productList: any = [];
  public totalItem: number = 0;
  constructor(
    private api: ApiService,
    private cartService: CarrinhoapiService
  ) {}

  ngOnInit(): void {
    this.api.listarProdutosId(1).subscribe((retorno) => {
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
