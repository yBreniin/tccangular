import { Component, OnInit } from '@angular/core';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';
import { ApiService } from '../../services/api.service';
import { Cliente } from '../../core/model';

@Component({
  selector: 'app-finalizado',
  templateUrl: './finalizado.component.html',
  styleUrls: ['./finalizado.component.scss']
})
export class FinalizadoComponent implements OnInit {
  value = 'Pesquisar';

  public clientes: Cliente[] = [];
  public products: any = [];
  public grandTotal = 0;
  constructor(
    private cartService: CarrinhoapiService,
    private api: ApiService
  ) {}
  ngOnInit(): void {
    this.api.getClientes().subscribe((res) => {
      this.clientes = res
    })

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
