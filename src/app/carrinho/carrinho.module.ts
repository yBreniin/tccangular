import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarrinhoModule { }
