import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalizadoRoutingModule } from './finalizado-routing.module';
import { FinalizadoComponent } from './finalizado/finalizado.component';


@NgModule({
  declarations: [
    FinalizadoComponent
  ],
  imports: [
    CommonModule,
    FinalizadoRoutingModule
  ]
})
export class FinalizadoModule { }
