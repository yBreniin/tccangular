import { Component, OnInit } from '@angular/core';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';

@Component({
  selector: 'app-finalizado',
  templateUrl: './finalizado.component.html',
  styleUrls: ['./finalizado.component.scss']
})
export class FinalizadoComponent implements OnInit {
  value = 'Pesquisar';

  public products: any = [];
  public grandTotal = 0;
  constructor(
    private cartService: CarrinhoapiService
  ) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

}
