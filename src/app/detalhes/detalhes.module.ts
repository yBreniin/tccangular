import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesRoutingModule } from './detalhes-routing.module';
import { DetalhesComponent } from './detalhes/detalhes.component';


@NgModule({
  declarations: [
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    DetalhesRoutingModule
  ]
})
export class DetalhesModule { }
