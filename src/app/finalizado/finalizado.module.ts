import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalizadoRoutingModule } from './finalizado-routing.module';
import { FinalizadoComponent } from './finalizado/finalizado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FinalizadoComponent
  ],
  imports: [
    CommonModule,
    FinalizadoRoutingModule,
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
export class FinalizadoModule { }
