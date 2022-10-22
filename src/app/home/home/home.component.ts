import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value = 'Pesquisar';

  produtos: Observable<Produtos[]>;
  api = ['nomeproduto', 'produtopreco'];
  constructor(private homeService: HomeService) {
    this.produtos = this.homeService.list();
  }

  ngOnInit(): void {}
}
