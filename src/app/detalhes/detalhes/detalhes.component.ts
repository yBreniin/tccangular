import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/core/model';
import { ApiService } from 'src/app/services/api.service';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  value = 'Pesquisar';
  products: Produtos[] = [];
  singleProduct: any;

  public productList: any;
  public totalItem: number = 0;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private cartService: CarrinhoapiService
  ) {}
  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.paramMap.subscribe((data: any) => {
      id = data.params.id;
      this.api.getProduct().subscribe(
        (retorno: any) => {
          this.products = retorno;
          this.products = this.products.filter((data: any) => data.id == id);
          this.singleProduct = this.products[0];
          console.log(this.singleProduct);
        },
        (error: any) => {
          console.error();
        }
      );
    });

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
