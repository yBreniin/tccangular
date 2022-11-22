import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoapiService } from 'src/app/services/carrinhoapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value = 'Pesquisar';

  public totalItem: number = 0;
  constructor(private cartService: CarrinhoapiService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
