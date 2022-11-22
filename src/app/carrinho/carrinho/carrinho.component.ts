import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';
import { ApiService } from 'src/app/services/api.service';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  value = 'Pesquisar';

  public products: any = [];
  public grandTotal!: number;
  constructor(
    private api: ApiService,
    private cartService: CarrinhoapiService
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  async listarProdutos() {
    this.api.getProduct().subscribe((retorno) => {
      this.products = retorno;
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
}
