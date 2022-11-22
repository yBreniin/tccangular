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
  }
}
